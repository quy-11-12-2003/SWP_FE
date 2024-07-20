import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import { fCurrencyVND } from "../../../utils/formatNumber";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../app/redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleViewDetails = () => {
        navigate(`/products/${product.id}`);
    };
    const imageUrl = product?.product.image?.content
        ? "data:image/jpeg;base64," + product?.product.image?.content
        : "/path/to/default-image.png";

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={product.name}
                sx={{ objectFit: "contain" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {fCurrencyVND(product.price)}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                <Button size="small" onClick={handleViewDetails}>Xem chi tiết</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
