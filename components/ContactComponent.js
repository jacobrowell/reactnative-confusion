import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const Contact = () => {
    return (
        <View>
            <Card title="Contact Information">
                <Text>
                    121, Clear Water Bay Road{'\n\n'}
                    Clear Water Bay, Kowloon{'\n\n'}
                    HONG KONG{'\n\n'}
                    Tel: +852 1234 5678{'\n\n'}
                    Fax: +852 8765 432{'\n\n'}
                    Email: confusion@food.net
                </Text>
            </Card>
        </View>
    );
};

export default Contact;