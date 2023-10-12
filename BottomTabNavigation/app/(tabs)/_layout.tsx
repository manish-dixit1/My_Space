import { Tabs } from "expo-router";
import { View, Text, Platform } from "react-native";
import { Image } from "expo-image";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";


export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 72,
        elevation: 0,
        backgroundColor: COLORS.white
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? COLORS.primary : COLORS.white,
                borderTopWidth: 2
              }}>
                <Image
                  source={focused ? icons.dashboard : icons.dashboardOutline}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black
                  }}
                />

                <Text style={{
                  fontSize: 14,
                  color: focused ? COLORS.primary : COLORS.black
                }}>Home</Text>
              </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? COLORS.primary : COLORS.white,
                borderTopWidth: 2
              }}>
                <Image
                  source={focused ? icons.card : icons.cardOutline}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black
                  }}
                />

                <Text style={{
                  fontSize: 14,
                  color: focused ? COLORS.primary : COLORS.black
                }}>Cards</Text>
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="exchange"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
                width: Platform.OS == "ios" ? 50 : 60,
                height: Platform.OS == "ios" ? 50 : 60,
                top: Platform.OS == "ios" ? -10 : -20,
                borderRadius: Platform.OS == "ios" ? 25 : 30,
              }}>
                <Image
                  source={icons.waves}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: COLORS.white
                  }}
                />
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="loans"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? COLORS.primary : COLORS.white,
                borderTopWidth: 2
              }}>
                <Image
                  source={focused ? icons.moneyBag : icons.moneyBagOutline}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black
                  }}
                />

                <Text style={{
                  fontSize: 14,
                  color: focused ? COLORS.primary : COLORS.black
                }}>Loans</Text>
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            return (
              <View style={{
                alignItems: "center",
                paddingTop: 16,
                borderTopColor: focused ? COLORS.primary : COLORS.white,
                borderTopWidth: 2
              }}>
                <Image
                  source={icons.setting}
                  contentFit="contain"
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: focused ? COLORS.primary : COLORS.black
                  }}
                />

                <Text style={{
                  fontSize: 14,
                  color: focused ? COLORS.primary : COLORS.black
                }}>Settings</Text>
              </View>
            )
          }
        }}
      />
    </Tabs>
  )
}