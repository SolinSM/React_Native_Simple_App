import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native';

import BookcaseItem from './bookcaseItem';

export default class ListBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Harry Potter and the Goblet of Fire',
                    author: 'J. K. Rowling',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
                },
                {
                    id: 2,
                    title: 'The Hobbit',
                    author: 'J. R. R. Tolkien',
                    thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
                },
                {
                    id: 3,
                    title: '1984',
                    author: 'George Orwell',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
                },
                {
                    id: 4,
                    title: 'August Rush',
                    author: '	Kirsten Sheridan',
                    thumbnail: 'https://covers.openlibrary.org/b/id/8151974-L.jpg'
                },
                {
                    id: 5,
                    title: 'Red Queen',
                    author: 'Victoria Aveyard',
                    thumbnail: 'https://covers.openlibrary.org/b/id/8184874-L.jpg'
                },
                {
                    id: 6,
                    title: 'Cat Among the Pigeons',
                    author: 'Agatha Christie',
                    thumbnail: 'https://covers.openlibrary.org/b/id/9937247-L.jpg'
                },
                {
                    id: 7,
                    title: 'The Cat in the Hat',
                    author: 'Dr. Seuss',
                    thumbnail: 'https://covers.openlibrary.org/b/id/5418029-L.jpg'
                },
                {
                    id: 8,
                    title: 'Snow! Snow! Snow!',
                    author: 'Lee Harper',
                    thumbnail: 'https://covers.openlibrary.org/b/id/9466516-L.jpg'
                },
                {
                    id: 9,
                    title: 'Jumanji',
                    author: 'Chris Van Allsburg',
                    thumbnail: 'https://covers.openlibrary.org/b/id/9093149-L.jpg'
                }
            ]
        }
    }

    _renderItem = ({item}) => (
        <BookcaseItem
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});