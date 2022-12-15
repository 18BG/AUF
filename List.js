import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const position = new Animated.ValueXY({x:10, y:100})

Animated.spring(position, {
    toValue: {x: 10, y: 50},
    speed: 10,
    bounciness: 30
}).start()


export default function List() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const loadData = async () => {
        
        const querySnapshot = await getDocs(collection(db, "user"));
        let i = 1;
        let tabUsers = [];
        querySnapshot.forEach((doc) => {
          // console.log(JSON.stringify(doc.data()));
          tabUsers.push({
            //index: i,
            userId: doc.data().userId,
            name: doc.data().name,
            email: doc.data().email,
          });
  
          i = i + 1;
        });
        console.log(JSON.stringify(tabUsers));
  
        setUsers(tabUsers);
      };
  
      loadData();
    }, []);
  
    return (
      // view global
    


    <View style={styles.container}>
        <Animated.View style={{alignItems: 'center', transform: [{translateX: position.x},{translateY: position.y}]}}>
        <StatusBar style="light" />
  
        {/* view sous-global 1 */}
        <View
          style={{
            flexDirection: "column",
            margin: 60,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "white",
              }}
            >
              List
            </Text>
          </View>
        </View>
        {/* end view sous-global 1 */}
        <FlatList
          data={users}
          renderItem={(item) => {
            return (
              <>
                {/* view sous-global 2 */}
                <View>
                  {/* view sous-global 2 - view 1*/}
                  <View
                    style={{
                      margin: 20,
                      width: "auto",
                      height: 80,
                      backgroundColor: "#69EDED",
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      marginBottom: 7,
                    }}
                  >
                    {/* view sous-global 2 - view 1 - sous view 1*/}
                    <View
                      style={{
                        margin: 5,
                        width: "auto",
                        height: 70,
                        backgroundColor: "#041418",
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
  
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      {/* view sous-global 2 - view 1 - sous-view 1 - view 1*/}
                      <View
                        style={{
                          width: 80,
                          height: 60,
                          backgroundColor: "#A9E4A5",
                          margin: 5,
                          borderTopLeftRadius: 25,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 30,
                            color: "#041F18",
                          }}
                        >
                          #{item.index}
                        </Text>
                      </View>
                      {/* end view sous-global 2 - view 1 - sous-view 1 - view 1*/}
  
                      {/* view sous-global 2 - view 1 - sous-view 1 - view 2*/}
                      <View
                        style={{
                          width: "68%",
                          height: 60,
                          backgroundColor: "#A2D6D2",
                          margin: 5,
                          borderBottomRightRadius: 25,
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                          paddingHorizontal: 4,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            color: "#041F18",
                          }}
                        >
                         {item.item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: "#4B5955",
                          }}
                        >
                         {item.item.email}
                         {item.item.userId}
                        </Text>
                      </View>
                      {/* end view sous-global 2 - view 1 - sous-view 1 - view 2*/}
                    </View>
                    {/* end view sous-global 2 - view 1 - sous view 1*/}
                  </View>
                  {/* end view sous-global 2 - view 1*/}
                </View>
                {/* end view sous-global 2 */}
              </>
            );
          }}
          keyExtractor={(item) => item.index}
        />
        </Animated.View>
        </View>
    
      // end view global
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#03242C",
      flexDirection: "column",
      padding: 0,
    },
  });