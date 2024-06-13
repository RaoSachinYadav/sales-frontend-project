import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
const SaleOrderModal = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Sale Order</ModalHeader>
                <ModalCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <FormControl id="customer" isRequired>
                            <FormLabel>All Products</FormLabel>
                            <Select {...register('customer')}>
                                <option value="Product1">Product 1</option>
                                <option value="Product2">Product 2</option>
                                <option value="Product3">Product 3</option>
                                <option value="Product4">Product 4</option>
                            </Select>
                        </FormControl>

                         <FormControl id="invoice_no" isRequired>
                            <div className='saleOrder-container'>
                                <FormLabel>1. SKU 227 (234 Kg)</FormLabel>
                                <div className='saleOrder'>
                                    <h2>Selling Rate
                                        <Input type="text" {...register('invoice_no')} placeholder='Enter selling rate' />
                                    </h2>
                                    <h2>Total Items
                                        <Input type="text" {...register('invoice_no')} placeholder='Enter quantity' />
                                    </h2>
                                </div>
                            </div>
                        </FormControl>

                        <FormControl id="invoice_no" isRequired>
                            <div className='saleOrder-container'>
                                <FormLabel>2. SKU 227 (234 Kg)</FormLabel>
                                <div className='saleOrder'>
                                    <h2>Selling Rate
                                        <Input type="text" {...register('invoice_no')} placeholder='Enter selling rate' />
                                    </h2>
                                    <h2>Total Items
                                        <Input type="text" {...register('invoice_no')} placeholder='Enter quantity' />
                                    </h2>
                                </div>
                            </div>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} type="submit">Submit</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default SaleOrderModal;