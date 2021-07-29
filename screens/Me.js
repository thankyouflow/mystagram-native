import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import { logUserOut } from "../apollo"
import useMe from "../hooks/useMe";

export default function Me({ navigation }) {
  const { data } = useMe();
  useEffect(() => {
    // 당신이 구성 요소 내에서 화면에 대한 옵션을 업데이트
    navigation.setOptions({ 
      title: data?.me?.username,
    });
  }, []);
  const onPressLearnMore = () => {
    logUserOut();
  }
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Me</Text>
      <Button
        onPress={onPressLearnMore}
        title="Log out"
      />
    </View>
  );
}