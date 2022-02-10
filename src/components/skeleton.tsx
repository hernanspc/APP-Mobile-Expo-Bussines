import { View, Text } from "react-native";
import React from "react";
import ContentLoader, {
  FacebookLoader,
  InstagramLoader,
  Bullets,
} from "react-native-easy-content-loader";

const SkeletonFbLoader = () => {
  return (
    <View>
      {/* <FacebookLoader
        pWidth={["100%", "100%", "100%", "95%"]}
        pHeight={[10, 10, 10, 10, 10, 10]}
        listSize={1}
        pRows={4}
        tWidth={"100%"}
        sTWidth={"90%"}
        tHeight={10}
      /> */}

      <Bullets active listSize={4} loading={true} aSize={30} />
      {/* <FacebookLoader active /> */}
    </View>
  );
};

export default SkeletonFbLoader;
