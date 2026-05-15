import { View, Text, FlatList } from "react-native";
import products from '../product.json';
import ProductListItem from "../components/ProductListItem";
import { Button,ButtonText } from "@/components/ui/button";



export default function HomeScreen(){
    return (    
         
            // <FlatList
            //     data={products}
            //     renderItem={({ item }) => <ProductListItem product={item} />}
                
            // />

            <Button>
                <ButtonText>Click me</ButtonText>
            </Button>
         
    )
}