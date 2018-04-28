import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: null,
        }
        this.renderList = this.renderList.bind(this);
    }
    componentWillMount() {
        //console.log('componentwillmount fired');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>{
            if (response.data) {
                this.setState({
                    productList: response.data,
                })
            }
        });
    }
    renderList() {
        const { productList } = this.state;
        const products = [];
        if (productList) {
           let idx=1;
           productList.forEach((prd)=>{
            let pKey = `pkey_${idx}`; 
            products.push(
                <ProductCard product={prd} key={pKey}/>
            );
            idx += 1;
           });
        }
        return products;
    }
    render() {
        return (
            <View>
                <Text> Product List.. </Text>
                {this.renderList()}
            </View>
        );
    }
}