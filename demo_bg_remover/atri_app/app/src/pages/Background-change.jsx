import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Upload as Upload1 } from "@atrilabs/react-component-manifests/src/manifests/Upload/Upload.tsx";
import { useTextBox3Cb, useFlex6Cb, useFlex7Cb, useFlex8Cb, useFlex9Cb, useImage3Cb, useImage4Cb, useUpload3Cb } from "../page-cbs/background-change";

export default function BackgroundChange() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("background-change")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("background-change")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox3Props = useStore((state)=>state["background-change"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["background-change"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Flex6Props = useStore((state)=>state["background-change"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["background-change"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex7Props = useStore((state)=>state["background-change"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["background-change"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex8Props = useStore((state)=>state["background-change"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["background-change"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex9Props = useStore((state)=>state["background-change"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["background-change"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Image3Props = useStore((state)=>state["background-change"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["background-change"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["background-change"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["background-change"]["Image4"]);
const Image4Cb = useImage4Cb()
const Upload3Props = useStore((state)=>state["background-change"]["Upload3"]);
const Upload3IoProps = useIoStore((state)=>state["background-change"]["Upload3"]);
const Upload3Cb = useUpload3Cb()

  return (<>
  <Flex1 {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<TextBox1 {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Flex1>
<Flex1 {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Flex1 {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Image1 {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<Upload1 {...Upload3Props} {...Upload3Cb} {...Upload3IoProps}/>
</Flex1>
<Flex1 {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Image1 {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex1>
</Flex1>
  </>);
}
