import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons , Octicons  } from "@expo/vector-icons";
const index = () => {
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Employee Management System
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>

          <View style={{ marginTop: 20, flexDirection: "row", gap: 20 }}>
            <Pressable
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "white",
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#D3CCE3",
                padding: 12,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "white",
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Mark Attendence
              </Text>
            </Pressable>
          </View>

          <View style={{marginTop:16 , backgroundColor:"white" , paddingHorizontal:10, paddingVertical:10 , borderRadius:15}}>
            <Pressable style={{borderRadius:15,padding:20,backgroundColor:"#BE93C5",alignItems:"center" , flexDirection:"row",gap:5, marginBottom:12}}>
              <View
                style={{
                  backgroundColor: "white",
                  height: 45,
                  width: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text style={{fontWeight:"600" , fontSize:16, flex:1}}>Attendence Report</Text>
              <View style={{width:35, height:35 , backgroundColor:"white", borderRadius:15 , justifyContent:"center", alignItems:"center"}}>
              <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{borderRadius:15,padding:20,backgroundColor:"#BE93C5",alignItems:"center" , flexDirection:"row",gap:5, marginBottom:12}}>
              <View
                style={{
                  backgroundColor: "white",
                  height: 45,
                  width: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  
                }}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text style={{fontWeight:"600" , fontSize:16, flex:1}}>Summary Report</Text>
              <View style={{width:35, height:35 , backgroundColor:"white", borderRadius:15 , justifyContent:"center", alignItems:"center"}}>
              <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{borderRadius:15,padding:20,backgroundColor:"#BE93C5",alignItems:"center" , flexDirection:"row",gap:5, marginBottom:12}}>
              <View
                style={{
                  backgroundColor: "white",
                  height: 45,
                  width: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text style={{fontWeight:"600" , fontSize:16, flex:1}}>Attendence Report</Text>
              <View style={{width:35, height:35 , backgroundColor:"white", borderRadius:15 , justifyContent:"center", alignItems:"center"}}>
              <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{borderRadius:15,padding:20,backgroundColor:"#BE93C5",alignItems:"center" , flexDirection:"row",gap:5, marginBottom:12}}>
              <View
                style={{
                  backgroundColor: "white",
                  height: 45,
                  width: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text style={{fontWeight:"600" , fontSize:16, flex:1}}>Attendence Report</Text>
              <View style={{width:35, height:35 , backgroundColor:"white", borderRadius:15 , justifyContent:"center", alignItems:"center"}}>
              <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
