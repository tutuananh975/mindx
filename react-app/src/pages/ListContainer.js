
import { Container } from "react-bootstrap";
import List from "../components/List";

function ListContainer() {
    const products = [
        {
            name: 'Thời trang nam',
            price: 100000,
            image: '/images/thoi-trang-nam.png',
            id: 1
        },
        {
            name: 'Điện thoại & phụ kiện',
            price: 200000,
            image: '/images/dien-thoai-va-phu-kien.png',
            id: 2
        },
        {
            name: 'Thiết bị điện tử ',
            price: 300000,
            image: '/images/thiet-bi-dien-tu.png',
            id: 3
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 4
        },
        {
            name: 'Máy Ảnh & Máy Quay Phim',
            price: 300000,
            image: '/images/may-anh.png',
            id: 5
        },
        {
            name: 'Đồng hồ',
            price: 300000,
            image: '/images/dong-ho.png',
            id: 6
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 7
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 8
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 9
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 10
        },
        {
            name: 'Thời trang nam',
            
            price: 300000,
            image: '/images/thoi-trang-nam.png',
            id: 11
        },
        {
            name: 'Điện thoại & phụ kiện',
            
            price: 300000,
            image: '/images/dien-thoai-va-phu-kien.png',
            id: 12
        },
        {
            name: 'Thiết bị điện tử ',
            
            price: 300000,
            image: '/images/thiet-bi-dien-tu.png',
            id: 13
        },
        {
            name: 'Máy tính & Laptop',
            
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 14
        },
        {
            name: 'Máy Ảnh & Máy Quay Phim',
            price: 300000,
            image: '/images/may-anh.png',
            id: 15
        },
        {
            name: 'Đồng hồ',
            price: 300000,
            image: '/images/dong-ho.png',
            id: 16
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 17
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 18
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 19
        },
        {
            name: 'Máy tính & Laptop',
            price: 300000,
            image: '/images/may-tinh-lap-top.png',
            id: 20
        }
    ];

    return (
        <Container>
            <List products={products}></List>
            {/* <List products={products2}></List> */}
        </Container>
    )
}

export default ListContainer;