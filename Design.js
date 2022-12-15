import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const menu = require("./images/me.png");
const search = require("./images/l.png");
const profil = require("./images/ag.png");
const bar = require("./images/br.png");
const bd = require("./images/bd.png");
const cl = require("./images/cl.png");
const b = require("./images/b.png");
const we = require("./images/we.png");
const doctor = require("./images/doctor.png");

export default function Design() {
  return (
    // view global
    <View 
        style={{ 
            flexDirection: 'column',
            padding: '2%',
            marginTop: '5%',
            backgroundColor: 'pink'
         }}
    >

        {/* view global - sous view 1 */}
        <View style={{ backgroundColor: 'red', height: '14%', 
            flexDirection: 'row', justifyContent: 'space-between' }}>

            {/* view global - sous view 1 - sous view 1*/}
            <View style={{ backgroundColor: 'yellow', height: '100%', 
                width: '30%', flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image source={menu}  style={{ width: 30,  }}/>
            </View>
            {/* end view global - sous view 1 - sous view 1*/}

            {/* view global - sous view 1 - sous view 2*/}
            <View style={{ backgroundColor: 'yellow', 
            height: '100%', width: '30%', flexDirection: 'row', 
            justifyContent: 'flex-end', alignItems: 'center' }}>
                <Image source={search}  style={{ width: 30,  }}/>
            </View>
            {/* end view global - sous view 1 - sous view 2*/}

        </View>
        {/* en view global - sous view 1 */}


        {/* view global - sous view 2 */}
        <View style={{ backgroundColor: 'blue', height: '25%', 
            flexDirection: 'column' }}>


            {/* view global - sous view 2 - sous view 1*/}
            <View style={{ backgroundColor: 'purple', height: '60%', 
                width: '100%', flexDirection: 'row' }}>

                {/* view global - sous view 2 - sous view 1 - sous view 1*/}
                <View style={{ backgroundColor: 'green', height: '100%', 
                    width: '60%', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 30 }}>Your{'\n'}Courses</Text>
                    <Image source={bar} style={{ width: 50 }}/>
                </View>
                {/* end view global - sous view 2 - sous view 1 - sous view 1*/}


                {/* view global - sous view 2 - sous view 1 - sous view 2*/}
                <View style={{ backgroundColor: 'blue', height: '100%', width: '40%', 
                        flexDirection: 'column', alignContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Image source={profil}  style={{ width: 100, height: 100 }}/>
                </View>
                {/* end view global - sous view 2 - sous view 1 - sous view 2*/}

            </View>
            {/* end view global - sous view 2 - sous view 1*/}



            {/* view global - sous view 2 - sous view 2*/}
            <View style={{ backgroundColor: 'red', height: '40%', 
                width: '100%', 
                flexDirection: 'column' }}>

                {/* view global - sous view 2 - sous view 2 - sous view 1*/}
                <View style={{ backgroundColor: 'grey', height: '50%',
                     width: '100%' }}>
                    <Text style={{ fontSize: 13 }}>Overlod Progresss</Text>
                </View>
                {/* end view global - sous view 2 - sous view 2 - sous view 1*/}

                {/* view global - sous view 2 - sous view 2 - sous view 2*/}
                <View style={{ backgroundColor: 'yellow', height: '50%', 
                    width: '100%' }}>

                </View>
                {/* end view global - sous view 2 - sous view 2 - sous view 2*/}

            </View>
            {/* end view global - sous view 2 - sous view 2*/}

        </View>
        {/* end view global - sous view 2 */}


        {/* view global - sous view 3 */}
        <View style={{ backgroundColor: 'green', height: '46%', 
            flexDirection: 'row' }}>

            {/* view global - sous view 3 - sous view 1*/}
            <View style={{ backgroundColor: 'pink', height: '100%', 
                width: '50%', flexDirection: 'column' }}>

                {/* view global - sous view 3 - sous view 1 - sous view 1*/}
                <View style={{ backgroundColor: 'orange', height: '40%', width: '100%', 
                    padding: 10 }}>
                    <Text style={{ fontSize: 12 }}>CODING</Text>
                    <Text style={{ fontSize: 21, marginBottom: 20 }}>Introduction{'\n'}to Javascript</Text>
                    <Image source={we}  style={{ width: 20, height: 20 }}/>
                </View>
                {/* end view global - sous view 3 - sous view 1 - sous view 1*/}

                {/* view global - sous view 3 - sous view 1 - sous view 2*/}
                <View style={{ backgroundColor: 'purple', height: '60%', 
                    width: '100%', padding: 10 }}>
                    <Text style={{ fontSize: 12 }}>CODING</Text>
                    <Text style={{ fontSize: 21 }}>Basic of{'\n'}HTML 
                        and CSS</Text>
                    <Text style={{ fontSize: 16, 
                            marginBottom: 26 }}>In this course, we{'\n'}will learn the basic tools for coders.</Text>
                    <Image source={we}  style={{ width: 20, height: 20 }}/>
                </View>
                {/* end view global - sous view 3 - sous view 1 - sous view 2*/}

            </View>
            {/* end view global - sous view 3 - sous view 1*/}

            {/* view global - sous view 3 - sous view 2*/}
            <View style={{ backgroundColor: 'blue', height: '100%', width: '50%', flexDirection: 'column', justifyContent: 'flex-start' }}>

                {/* view global - sous view 3 - sous view 2 - sous view 1*/}
                <View style={{ backgroundColor: 'red', height: '70%', width: '100%', padding: 15 }}>
                    <Text style={{ fontSize: 21 }}>You haven't{'\n'} missed a class in three days!</Text>
                    <Image source={doctor}  style={{ width: 130, height: 130, marginLeft: 50 }}/>
                </View>
                {/* end view global - sous view 3 - sous view 2 - sous view 1*/}

                {/* view global - sous view 3 - sous view 2 - sous view 2*/}
                <View style={{ backgroundColor: 'grey', height: '30%', width: '100%', flexDirection: 'column', justifyContent: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 12 }}>ARTICLE</Text>
                    <Text style={{ fontSize: 21 }}>Tips for Better{'\n'}Teamwork</Text>
                </View>
                {/* end view global - sous view 3 - sous view 2 - sous view 2*/}
            </View>
            {/* end view global - sous view 3 - sous view 2*/}

        </View>
        {/* end view global - sous view 3 */}


        {/* view global - sous view 4 */}
        <View style={{ backgroundColor: 'yellow', height: '15%', flexDirection: 'row', justifyContent: 'space-between' }}>

           {/* view global - sous view 4 - sous view 1*/}
           <View style={{ backgroundColor: 'grey', height: '100%', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={bd} style={{ width: 30, height: 30}}/>
            </View>
            {/* end view global - sous view 4 - sous view 1*/}

            {/* view global - sous view 4 - sous view 1*/}
           <View style={{ backgroundColor: 'red', height: '100%', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={b} style={{ width: 40, height: 40}}/>
            </View>
            {/* end view global - sous view 4 - sous view 1*/}

            {/* view global - sous view 4 - sous view 1*/}
           <View style={{ backgroundColor: 'green', height: '100%', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={cl} style={{ width: 30, height: 30}}/>
            </View>
            {/* end view global - sous view 4 - sous view 1*/}

        </View>
        {/* end view global - sous view 4 */}

    </View>
    // end view global
  );
}
