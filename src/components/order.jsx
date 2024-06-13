import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, useDisclosure, Table, Thead, Tbody, Tr, Th, Td, Flex, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SaleOrderModal from './saleOrder';
import EditOrderModal from './editOrder';
import ThemeToggle from './theme';

const Orders = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [editOrderModal, setEditOrderModal] = useState({ isOpen: false, order: null });

    const handleEdit = (order) => {
        setEditOrderModal({ isOpen: true, order });
    };

    const handleEditClose = () => {
        setEditOrderModal({ isOpen: false, order: null });
    };

    return (
        <Box p={4} justifyContent='center' height='100vh' width='222vh' >
            <Box p={1} mb='4' >
            <h1>Manage Your Orders Here!</h1>
            </Box>
            <Flex justify="space-between" mb={4}>
                <ThemeToggle />
            </Flex>
            <Tabs variant="soft-rounded" colorScheme="blue">
                <TabList>
                    <Tab>Active Sale Orders</Tab>
                    <Tab>Completed Sale Orders</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex mb={4}>
                            <Spacer />
                            <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="blue">
                                Sale Order
                            </Button>
                        </Flex>
                        <SaleOrderModal isOpen={isOpen} onClose={onClose} />
                        <EditOrderModal
                            isOpen={editOrderModal.isOpen}
                            onClose={handleEditClose}
                            order={editOrderModal.order}
                        />
                        <Table mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>Customer name</Th>
                                    <Th>price(₹)</Th>
                                    <Th>last modified</Th>
                                    <Th>edit</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Sachin</Td>
                                    <Th>₹ 210</Th>
                                    <Td>2024-06-09</Td>
                                    <Td>
                                        <Button onClick={() => handleEdit({ id: '1', customer: 'Customer 1', date: '2024-05-24', price:' ₹210' })}>
                                            Edit
                                        </Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>Puneet</Td>
                                    <Th>₹ 100</Th>
                                    <Td>2024-06-09</Td>
                                    <Td>
                                        <Button onClick={() => handleEdit({ id: '2', customer: 'Customer 2', date: '2024-05-24', price:' ₹100' })}>
                                            Edit
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TabPanel>
                    <TabPanel>
                        <Table mt={4}>
                            <Thead>
                                <Tr>
                                    <Th>Id</Th>
                                    <Th>Customer</Th>
                                    <Th>Date</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Customer 2</Td>
                                    <Td>2024-05-25</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Orders;