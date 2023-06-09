import { StyleSheet } from "react-native";
import {COLORS,SIZES,FONTS} from '../../constants/theme'

export default StyleSheet.create({
    //render styles
    renderButtonContainer:{
        height:240,
        width:180,
        justifyContent:'center',
        marginHorizontal:SIZES.base,
    },
    renderShoesTypeText:{
        color:COLORS.gray,
        ...FONTS.h5
    },
    renderShoesContentSectionContainer:{
        flex:1,
        justifyContent:'flex-end',
        marginTop:SIZES.base,
        borderRadius:10,
        marginRight:SIZES.padding,
        paddingLeft:SIZES.radius,
        paddingRight:SIZES.padding,
        paddingBottom:SIZES.radius
    },
    renderShoesContentSectionInnerContainer:{
        height:'35%',
        justifyContent:'space-between'
    },
    renderShoesContentNameText:{
        marginLeft:SIZES.base,
        color:COLORS.white,
        ...FONTS.body4
    },
    renderShoesContentPriceText:{
        marginLeft:SIZES.base,
        color:COLORS.white,
        ...FONTS.body3
    },
    renderTrendingBgColorSliceContainer:{
        position:'absolute',
        top:27,
        right:0,
        width:'95%',
        height:'100%'
    },
    renderTrendingİmage:{
        width:'98%',
        height:80,
        position:'absolute',
        top:50,
        right:0,
        transform:[
            {rotate:'-15deg'}
        ]
    },

    //renderRecentlyViewed
    recentlyButton:{
      flex:1,
      flexDirection:'row'  
    },
    recentlyButtonImageContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },


    container:{
        flex:1,
        backgroundColor:COLORS.white
    },
    trendingShadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:5,
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7,
    },
     trendingHeaderText:{
        marginTop:SIZES.radius,
        marginHorizontal:SIZES.padding,
        ...FONTS.largeTitleBold
     },
     trendingContainer:{
        height:260,
        marginTop:SIZES.radius
     },
     recentlyContainer:{
        flex:1,
        marginTop:SIZES.padding,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:COLORS.white,
        flexDirection:'row'
     },
     recentConatinerShadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:7
        },
        shadowOpacity: 0.43,
        shadowRadius:9.51,
        elevation:15,
     },
     recentlyImageContainer:{
        width:60,
        marginLeft:SIZES.base
    },
    recentlyImage:{
        resizeMode:'contain',
        width:"100%",
        height:"100%"
    },
    recentlyInnerContainer:{
        flex:1,
        flexDirection:'row',
        paddingBottom:SIZES.padding
    },
    blurContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    absolute:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0
     },
     modalContainer:{
        justifyContent:'center',
        width:'85%',        
     },
     modalImageContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:-SIZES.padding*2
     },
     modalImage:{
        resizeMode:'contain',
        width:'90%',
        height:170,
        transform:[
            {rotate:'-15deg'}
        ]
     },
     modalTitleName:{
        marginTop:SIZES.padding,
        marginHorizontal:SIZES.radius+7,
        color:COLORS.white,
        ...FONTS.body2
     },
     modalShoesTextType:{
        marginTop:SIZES.base/2,
        marginHorizontal:SIZES.radius+7,
        color:COLORS.white,
        ...FONTS.body3
     },
     modalPriceText:{
        marginTop:SIZES.radius,
        marginHorizontal:SIZES.radius+7,
        color:COLORS.white,
        ...FONTS.h1
     },
     modalShoesSizesContainer:{
        flexDirection:'row',
        marginTop:SIZES.radius,
        marginHorizontal:SIZES.radius+7,
     },
     modalSelectSizesText:{
        color:COLORS.white,
        ...FONTS.body3
     },
     modalShoesSizesInnerContainer:{
        flex:1,
        flexDirection:'row',
        marginLeft:SIZES.radius,
        alignItems:'center',
        flexWrap:'wrap'
     },
     modalSelectSizesclick:{
        width:25,
        height:25,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5,                                        marginBottom:10,                                           borderWidth:1,
        borderColor:COLORS.white,
        borderRadius:5
     },
     addToButton:{
        width:'100%',
        height:70,
        marginTop:SIZES.base,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
     },
     buttonText:{
        color:COLORS.white,
        ...FONTS.largeTitleBold
     }
})