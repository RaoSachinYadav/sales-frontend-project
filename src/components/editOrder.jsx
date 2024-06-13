import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const EditOrderModal = ({ isOpen, onClose, order }) => {
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: order
    });
  
    useEffect(() => {
        if (order) {
            // eslint-disable-next-line react/prop-types
            setValue('id', order.id);
            // eslint-disable-next-line react/prop-types
            setValue('customer', order.customer);
            // eslint-disable-next-line react/prop-types
            setValue('date', order.date);
            // eslint-disable-next-line react/prop-types
            setValue('price', order.price);
        }
    }, [order, setValue]);

    const onSubmit = (data) => {
        console.log('Edited Data:', data);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Sale Order</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <FormControl id="id">
                            <FormLabel>ID</FormLabel>
                            <Input type="text" {...register('id')} readOnly />
                        </FormControl>
                        <FormControl id="customer">
                            <FormLabel>Customer Name</FormLabel>
                            <Input type="text" {...register('customer')} />
                        </FormControl>
                        <FormControl id="price">
                            <FormLabel>Price(₹)</FormLabel>
                            <Input type="price" {...register('price')} />
                        </FormControl>
                        <FormControl id="date">
                            <FormLabel>Last Modified</FormLabel>
                            <Input type="date" {...register('date')} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} type="submit">
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default EditOrderModal;