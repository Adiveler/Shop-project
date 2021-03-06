import { StyleSheet } from 'react-native';

export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    Aqua: '#00FFFF',

}
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
      },
    txt:{
        fontSize:20,
        fontFamily:'reggae-one'
    },
    img:{
        height: "100%",
        width: "100%",
    },
    home_view1:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    Home_view2: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white
    },

    home_entypo:{
        fontSize: 18,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight
    },
    home_text1:{
        fontSize: 26,
        color: COLOURS.black,
        fontWeight: "500",
        letterSpacing: 1,
        marginBottom: 10,
    },
    home_text2:{
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: "400",
        letterSpacing: 1,
        marginBottom: 10,
        lineHeight: 24,
    },
    home_text3:{
        fontSize: 18,
        color: COLOURS.black,
        fontWeight: "400",
        opacity: 0.5,
        letterSpacing: 1,
        marginLeft: 20,
        position: "relative",
        margin: 10,
    },
    home_text4:{
        fontSize: 18,
        color: COLOURS.blue,
        fontWeight: '400',
        marginLeft: 10,
    },
    btnTab:{
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: COLOURS.black,
        padding: 5.5,
        justifyContent: "center",
        backgroundColor: COLOURS.Aqua,
    },
    btnTabActive: {
        backgroundColor: '#E6838D'
    },
    btnTextTab:{
        fontSize: 13,
        color: COLOURS.black,
    },
    textTabActive: {
        color: '#ffffff'
    },
    listTabStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,
    },
    Home_TouchableOpacity_1: {
        width: '48%',
        margin: 2,
        marginVertical: 5,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        margin: 2
    },
    productInfo_View_1: {
        width: '100%',
        backgroundColor: COLOURS.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    productInfo_View_2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLeft: 16,
    },
    productInfo_Entypo_1: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.white,
        borderRadius: 10,
    },
    productInfo_text_1: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginVertical: 4,
        color: COLOURS.black,
        maxWidth: '84%',
    },
    productInfo_Ionicons_1: {
        fontSize: 24,
        color: COLOURS.blue,
        backgroundColor: COLOURS.blue + 10,
        padding: 8,
        borderRadius: 100,
    },
    productInfo_text_2: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '400',
        letterSpacing: 1,
        opacity: 0.5,
        lineHeight: 20,
        maxWidth: '85%',
        maxHeight: 44,
        marginBottom: 6,
    },
    productInfo_Text_3: {
        fontSize: 20,
        fontWeight: '600',
        maxWidth: '85%',
        color: COLOURS.black,
        marginBottom: 5,
    },
    productInfo_Text_4: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 1,
        color: COLOURS.white,
        textTransform: 'uppercase',

    },
    productInfo_View_3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: COLOURS.backgroundLight,
        borderBottomWidth: 1,
        padding: 10,
    },
    productInfo_View_4: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
    },
    productInfo_View_5: {
        color: COLOURS.blue,
        backgroundColor: COLOURS.backgroundLight,
        alignItems: 'center',
        padding: 6,
        borderRadius: 100,
        marginRight: 10,
    },
    productInfo_View_6: {
        position: 'absolute',
        bottom: 5,
        height: '8%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productInfo_TouchableOpacity_1: {
        width: '86%',
        height: '90%',
        backgroundColor: COLOURS.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myCart_TouchableOpacity_1: {
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    myCart_TouchableOpacity_2: {
        width: '86%',
        height: '90%',
        backgroundColor: COLOURS.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myCart_View_1: {
        width: '30%',
        height: 100,
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 10,
        marginRight: 22,
    },
    myCart_View_2: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        opacity: 0.5,
    },
    myCart_View_3: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
    },
    myCart_View_4: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 16,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myCart_View_5: {
        color: COLOURS.blue,
        backgroundColor: COLOURS.backgroundLight,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 10,
        marginRight: 18,
    },
    myCart_View_6: {
        position: 'absolute',
        bottom: 10,
        height: '8%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    myCart_Text_1: {
        fontSize: 14,
        maxWidth: '100%',
        color: COLOURS.black,
        fontWeight: '600',
        letterSpacing: 1,
    },
    myCart_Text_2: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '500',
    },

    myCart_Text_3: {
        fontSize: 20,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        paddingTop: 20,
        paddingLeft: 16,
        paddingBottom: 10,
    },
    myCart_Text_4: { 
        fontSize:12,
        fontWeight:'400',
        maxWidth:'80%',
        color:COLOURS.black,
    },
    myCart_Text_5: {
        margin: 15,
        fontSize: 20,
        fontWeight: '400',
        maxWidth: '80%',
        color: COLOURS.black,
        opacity: 0.5,
    },
    myCart_MaterialCommunityIcons_1: {
        fontSize: 16,
        color: COLOURS.backgroundDark,
    },
    myCart_MaterialCommunityIcons_2: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.backgroundLight,
        borderRadius: 12,
    },
    payment_View_1: {
        position: 'absolute',
        bottom: 10,
        height: '8%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    payment_TouchableOpacity_1: {
        width: '86%',
        height: '90%',
        backgroundColor: COLOURS.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    payment_Input_1: {
        borderWidth: 1,
        borderColor: COLOURS.backgroundLight,
        padding: 8,
        margin: 10,
        width: 150,
        borderRadius: 25,
    },
    payment_Input_2: {
        borderColor: 'gray',
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    payment_Text_1: {
        fontSize: 20,
        color: COLOURS.black,
        fontWeight: '500',
        letterSpacing: 1,
        paddingTop: 20,
        paddingLeft: 16,
        marginBottom: 10,
    },
    payment_Text_2: {
        fontSize: 18,
        color: COLOURS.black,
        letterSpacing: 10,
        paddingTop: 20,
        paddingLeft: 16,
        marginBottom: 10,
    },
    
});