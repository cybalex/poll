import React from 'react';
import { ScrollView, Animated, Dimensions, Keyboard, StyleSheet, Text, View, Alert, TextInput, TouchableHighlight, TouchableOpacity, UIManager} from 'react-native';
import I18n from 'react-native-i18n';
import { Header } from '../sections/Header';
import { Question } from '../model/Question';
import { Localization } from 'expo-localization';
import { Translations } from '../translations/Translations';

const { State: TextInputState } = TextInput;

export class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.question = Question;
        this.state = {
            question: '',
            answer: '',
            shift: new Animated.Value(0),
        };
    }

    componentWillMount() {
        this.keyboardDidShowSub = Keyboard.addListener(
            'keyboardDidShow',
            this.handleKeyboardDidShow
        );
        this.keyboardDidHideSub = Keyboard.addListener(
            'keyboardDidHide',
            this.handleKeyboardDidHide
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    clearFields=()=> this.setState({question: '', answer: ''});

    saveQuestion=()=> {
        Alert.alert(Localization.locale);
        // Alert.alert(
        //     'question should be stored in db',
        //     this.state.question + ' - ' + this.state.answer
        // );
    };

    render() {
        const { shift } = this.state;

        return (
            <Animated.View style={[styles.container, { transform: [{translateY: shift}] }]}>
                <ScrollView
                    scrollEnabled={false}
                    contentContainerStyle={{
                        flexGrow : 1,
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                >
                    <Header message = {I18n.t('Login')} />
                </ScrollView>

                <ScrollView
                    scrollEnabled={false}
                    contentContainerStyle={{
                        flexGrow : 1,
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={styles.caption}>Create new question</Text>
                </ScrollView>

                <ScrollView
                    scrollEnabled={false}
                    contentContainerStyle={{
                        flexGrow : 1,
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                >

                    <View style={{flex:2}}>
                        <TextInput
                            style={[styles.input, {marginBottom: 0, marginTop: 0}]}
                            onChangeText={(text) => this.setState({question: text})}
                            value={this.state.question}
                            autoCapitalize = "none"
                            placeholder = {I18n.t('Type a question')}
                            placeholderTextColor = "#888888"
                            underlineColorAndroid = "transparent"
                            multiline = {true}
                            blurOnSubmit={false}
                        />
                    </View>
                </ScrollView>

                {/*<Text style={styles.label}>Answer</Text>*/}
                <ScrollView
                    scrollEnabled={false}
                    contentContainerStyle={{
                        flexGrow : 1,
                        flex: 1,
                        justifyContent: 'space-between',
                        marginTop: 20
                    }}
                >

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({answer: text})}
                        value={this.state.answer}
                        autoCapitalize = "none"
                        placeholder = "My name is Oleksii"
                        placeholderTextColor = "#888888"
                        multiline = {true}
                        blurOnSubmit={false}
                    />
                </ScrollView>

                <ScrollView
                    scrollEnabled={false}
                    contentContainerStyle={{
                        flexGrow : 1,
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {
                            () => this.saveQuestion()
                        }>
                        <Text style = {styles.buttonText}> Submit </Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>
        );
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap,
                    duration: 500,
                    useNativeDriver: true,
                }
            ).start();
        });
    };

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }
        ).start();
    };
}

I18n.fallbacks = true;
I18n.locale = Localization.locale;

I18n.translations=Translations.localization;
    //{

    // en: {
    //     Question: 'Question!',
    //     'Type a question': 'Ask a question',
    // },
    // de: {
    //     Question: 'Die Frage',
    //     'Type a question': 'Eine frage stellen',
    // }
// };

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImageStyle: {
        width: '100%',
        height: '100%'
    },
    caption: {
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
        textAlignVertical: 'bottom'
    },
    label: {
        marginLeft: 15,
        marginBottom: 6,
        fontSize: 16,
        flex: 1,
        textAlignVertical: 'bottom',
        color: '#35605a'
    },
    input:{
        height: '100%',
        width: '90%',
        padding: 10,
        marginTop: 0,
        margin: 15,
        borderRadius: 10,
        color: '#35605a',
        borderWidth: 1,
        borderColor: '#35605a',
    },
    button:{
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    buttonText:{
        color: 'white'
    }
});
