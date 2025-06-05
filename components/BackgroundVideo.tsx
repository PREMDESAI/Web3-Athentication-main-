import React, { useMemo, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import Video, { VideoRef } from "react-native-video";
import { hp } from "@/utils";
const videoSrc = require("../assets/videos/welcome.mp4");

export function BackgroundVideo() {
  const opacity = useMemo(() => new Animated.Value(0), []);
  const videoRef = useRef<VideoRef>(null);

  return (
    <Animated.View style={[styles.videoWrapper, { opacity: 1 }]}>
      <Video
        source={videoSrc}
        ref={videoRef}
        style={{ flex: 1 }}
        muted
        repeat
        resizeMode="cover"
        disableFocus
        fullscreen={false}
        ignoreSilentSwitch="obey"
        playInBackground={false}
        playWhenInactive={false}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  videoWrapper: {
    height: hp(70),
    width: "100%",
    position: "absolute",
  },
});
