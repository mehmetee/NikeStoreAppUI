import React, { startTransition } from "react";
import { FlatList, Image, Modal, SafeAreaView,Text,TouchableOpacity,View, } from "react-native";
import { Svg,Polygon } from "react-native-svg";
import {BlurView} from 'expo-blur'

import {SIZES, images, FONTS, COLORS,} from "../../constants/index";
import styles from './Home.styles';
import { trendingData,recentlyData } from "../../Data"; 

function Home(){
    const [showAddToModal,setShowAddToModal]=React.useState(false)
    const [selectItem,setSelectItem]=React.useState(null)
    const [selectedSize,setSelectedSize]=React.useState('')
   
    //render
    function renderTrendingShoes(item,index){
        var trendingStyle={}
        if(index==0){
            trendingStyle={marginLeft:SIZES.padding}
        }
        return(
            <TouchableOpacity style={[{...trendingStyle},styles.renderButtonContainer]}
            onPress={()=>{setSelectItem(item) 
                setShowAddToModal(true)
            }}
            >
                <Text style={styles.renderShoesTypeText}>{item.type}</Text>
                <View style={[{backgroundColor:item.bgColor,},styles.trendingShadow,styles.renderShoesContentSectionContainer]}>
                    <View style={styles.renderShoesContentSectionInnerContainer}>
                        <Text style={styles.renderShoesContentNameText}>{item.name}</Text>
                        <Text style={styles.renderShoesContentPriceText}>{item.price}</Text>
                    </View>
                </View>
    
                <View style={styles.renderTrendingBgColorSliceContainer}>
                    <Svg height="100%" width="100%">
                        <Polygon 
                            points="0,0 160,0 160,80"
                            fill='white'
                        />
                    </Svg>
                </View>
    
                <Image source={item.img}
                resizeMode='cover'
                style={styles.renderTrendingİmage}
                />
            </TouchableOpacity>
        )
    }

    //renderRecentlyViewed
    function renderRecentlyViewed(item,index){

        return(
            <TouchableOpacity style={styles.recentlyButton}
            onPress={()=>{
                setSelectItem(item)
                setShowAddToModal(true)
            }}
            >
                <View style={styles.recentlyButtonImageContainer}>
                    <Image source={item.img}
                    style={{
                        resizeMode:'contain',
                        width:125,
                        height:100,        
                    }}/>
                </View>
                <View style={{flex:1.5,marginLeft:SIZES.body2,justifyContent:'center'}}>
                    <Text style={{color:COLORS.gray,...FONTS.body3}}>{item.name}</Text>
                    <Text style={{...FONTS.body2}}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
           <Text style={styles.trendingHeaderText} >TRENDİNG</Text>

           {/* Trending*/}
           <View style={styles.trendingContainer}>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={trendingData}
            renderItem={({item,index})=>renderTrendingShoes(item,index)}
            keyExtractor={item=>item.id.toString()}
            />
           </View>
           {/* Recently Viewed*/}
            <View style={[styles.recentlyContainer,styles.recentConatinerShadow]}>
                <View style={styles.recentlyImageContainer}>
                    <Image source={images.recentlyViewedLabel}
                    style={styles.recentlyImage}/>
                </View>
                <View style={styles.recentlyInnerContainer}>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={recentlyData}
                    renderItem={({item,index})=> renderRecentlyViewed (item ,index)}
                    keyExtractor={item=>item.id.toString()}
                    />
                </View>
            </View>
           {/* Show Modal*/}
            {selectItem &&
            <Modal 
            animationType="slide"
            transparent={true}
            visible={showAddToModal}
            >
                <BlurView style={styles.blurContainer} intensity={310} tint={"default"}>
                    <TouchableOpacity
                    style={styles.absolute}
                    onPress={()=>{
                        setSelectItem(null)
                        setSelectedSize("")
                        setShowAddToModal(false)}}
                    >
                       
                    </TouchableOpacity>
                       {/* Modal Content*/}
                       <View style={[styles.modalContainer,{backgroundColor:selectItem.bgColor}]}>
                            <View style={styles.modalImageContainer}>
                                <Image 
                                source={selectItem.img}
                                style={styles.modalImage} />
                            </View>
                            <Text style={styles.modalTitleName}>{selectItem.name}</Text>
                            <Text style={styles.modalShoesTextType}>{selectItem.type}</Text>
                            <Text style={styles.modalPriceText}>{selectItem.price}</Text>
                            <View style={styles.modalShoesSizesContainer}>
                                <View>
                                    <Text style={styles.modalSelectSizesText}>Select Size</Text>
                                </View>
                                <View style={styles.modalShoesSizesInnerContainer}>
                                    {selectItem.sizes.map((item,index)=>{
                                        return(
                                            <TouchableOpacity key={index} 
                                            style={[{
                                            backgroundColor:selectItem.sizes[index]==selectedSize ? COLORS.white:null,
                                            },styles.modalSelectSizesclick]}
                                            onPress={()=>{setSelectedSize(item)}}
                                            >
                                                <Text style={{color:selectItem.sizes[index]==selectedSize? COLORS.black  :COLORS.white ,...FONTS.body4}}>{item}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </View>
                            <TouchableOpacity style={styles.addToButton}
                            onPress={()=>{
                            setSelectItem(null)
                            setSelectedSize('')
                            setShowAddToModal(false)
                            }
                            }
                            >
                                <Text style={styles.buttonText}>Add to Bag</Text>
                            </TouchableOpacity>
                       </View>
                </BlurView>
            </Modal>
            }
        </SafeAreaView>
    );
};

export default Home;