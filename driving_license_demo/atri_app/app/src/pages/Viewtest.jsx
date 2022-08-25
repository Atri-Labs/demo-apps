import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useImage68Cb, useTextBox47Cb, useImage69Cb, useTextBox48Cb, useImage70Cb, useTextBox49Cb, useImage71Cb, useTextBox50Cb, useImage72Cb, useTextBox51Cb, useImage73Cb, useTextBox52Cb, useImage74Cb, useTextBox53Cb, useImage75Cb, useTextBox54Cb, useImage76Cb, useTextBox55Cb, useTextBox56Cb, useImage77Cb, useImage78Cb, useFlex117Cb, useImage79Cb, useFlex118Cb, useImage80Cb, useFlex119Cb, useImage81Cb, useFlex120Cb, useImage82Cb, useFlex121Cb, useImage83Cb, useFlex122Cb, useImage84Cb, useFlex123Cb, useImage85Cb, useFlex124Cb, useImage86Cb, useFlex125Cb, useFlex126Cb, useImage87Cb, useButton4Cb, useImage88Cb, useTextBox57Cb, useImage89Cb, useTextBox58Cb, useTextBox59Cb, useImage90Cb, useFlex127Cb, useTextBox60Cb, useImage91Cb, useFlex128Cb, useTextBox61Cb, useImage92Cb, useFlex129Cb, useTextBox62Cb, useImage93Cb, useFlex130Cb, useTextBox63Cb, useImage94Cb, useFlex131Cb, useTextBox64Cb, useImage95Cb, useFlex132Cb, useTextBox65Cb, useImage96Cb, useFlex133Cb, useTextBox66Cb, useImage97Cb, useFlex134Cb, useTextBox67Cb, useImage98Cb, useFlex135Cb, useFlex136Cb, useImage99Cb, useTextBox68Cb, useFlex137Cb, useFlex138Cb, useFlex139Cb, useTextBox69Cb, useTextBox70Cb, useFlex140Cb, useFlex141Cb, useFlex142Cb, useFlex143Cb, useFlex144Cb, useFlex145Cb, useFlex146Cb, useFlex147Cb, useFlex148Cb, useFlex149Cb, useFlex150Cb, useFlex151Cb, useFlex152Cb, useFlex153Cb, useFlex154Cb, useFlex155Cb, useFlex156Cb, useFlex157Cb, useFlex158Cb, useFlex159Cb, useFlex160Cb, useFlex161Cb, useFlex162Cb, useFlex163Cb, useFlex164Cb, useFlex165Cb, useFlex166Cb, useFlex167Cb, useFlex168Cb, useFlex169Cb, useFlex170Cb, useFlex171Cb, useImage101Cb, useTextBox72Cb, useTextBox73Cb, useButton6Cb, useImage102Cb, useTextBox74Cb, useTextBox75Cb, useFlex181Cb, useFlex182Cb, useFlex183Cb, useFlex184Cb, useFlex185Cb, useFlex186Cb, useTextBox76Cb, useButton8Cb, useImage103Cb, useTextBox77Cb, useImage104Cb, useTextBox78Cb, useFlex187Cb, useFlex188Cb, useFlex189Cb, useTextBox79Cb, useTextBox80Cb, useFlex190Cb, useFlex191Cb, useFlex192Cb, useImage105Cb, useFlex193Cb, useFlex194Cb, useButton9Cb, useTextBox81Cb, useFlex197Cb, useTextBox82Cb, useFlex198Cb, useFlex199Cb, useTextBox83Cb, useButton10Cb, useFlex200Cb, useFlex201Cb, useTextBox85Cb, useButton11Cb, useFlex202Cb, useFlex203Cb, useTextBox87Cb, useButton12Cb, useFlex204Cb, useFlex205Cb, useTextBox89Cb, useButton13Cb, useButton14Cb, useTextBox91Cb, useFlex208Cb, useFlex209Cb, useTextBox93Cb, useTextBox94Cb, useTextBox95Cb, useTextBox96Cb, useFlex210Cb, useFlex211Cb, useImage106Cb, useImage107Cb, useImage108Cb, useButton15Cb, useFlex212Cb, useFlex213Cb, useTextBox97Cb, useFlex214Cb, useFlex215Cb, useFlex216Cb, useImage109Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useFlex218Cb, useTextBox101Cb, useTextBox102Cb, useTextBox103Cb, useImage110Cb, useFlex219Cb, useFlex220Cb, useFlex221Cb, useImage111Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useFlex222Cb, useFlex223Cb, useFlex224Cb, useFlex225Cb, useInput1Cb, useFlex226Cb, useButton16Cb, useButton20Cb } from "../page-cbs/viewtest";

export default function Viewtest() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [])

  useLayoutEffect(()=>{
    setEffectivePropsForPage("viewtest")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("viewtest")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Image68Props = useStore((state)=>state["viewtest"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["viewtest"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox47Props = useStore((state)=>state["viewtest"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["viewtest"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Image69Props = useStore((state)=>state["viewtest"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["viewtest"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox48Props = useStore((state)=>state["viewtest"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["viewtest"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Image70Props = useStore((state)=>state["viewtest"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["viewtest"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox49Props = useStore((state)=>state["viewtest"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["viewtest"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image71Props = useStore((state)=>state["viewtest"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["viewtest"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox50Props = useStore((state)=>state["viewtest"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["viewtest"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image72Props = useStore((state)=>state["viewtest"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["viewtest"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox51Props = useStore((state)=>state["viewtest"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["viewtest"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image73Props = useStore((state)=>state["viewtest"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["viewtest"]["Image73"]);
const Image73Cb = useImage73Cb()
const TextBox52Props = useStore((state)=>state["viewtest"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["viewtest"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image74Props = useStore((state)=>state["viewtest"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["viewtest"]["Image74"]);
const Image74Cb = useImage74Cb()
const TextBox53Props = useStore((state)=>state["viewtest"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["viewtest"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image75Props = useStore((state)=>state["viewtest"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["viewtest"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox54Props = useStore((state)=>state["viewtest"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["viewtest"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Image76Props = useStore((state)=>state["viewtest"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["viewtest"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox55Props = useStore((state)=>state["viewtest"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["viewtest"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["viewtest"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["viewtest"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image77Props = useStore((state)=>state["viewtest"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["viewtest"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["viewtest"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["viewtest"]["Image78"]);
const Image78Cb = useImage78Cb()
const Flex117Props = useStore((state)=>state["viewtest"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["viewtest"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Image79Props = useStore((state)=>state["viewtest"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["viewtest"]["Image79"]);
const Image79Cb = useImage79Cb()
const Flex118Props = useStore((state)=>state["viewtest"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["viewtest"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Image80Props = useStore((state)=>state["viewtest"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["viewtest"]["Image80"]);
const Image80Cb = useImage80Cb()
const Flex119Props = useStore((state)=>state["viewtest"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["viewtest"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Image81Props = useStore((state)=>state["viewtest"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["viewtest"]["Image81"]);
const Image81Cb = useImage81Cb()
const Flex120Props = useStore((state)=>state["viewtest"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["viewtest"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Image82Props = useStore((state)=>state["viewtest"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["viewtest"]["Image82"]);
const Image82Cb = useImage82Cb()
const Flex121Props = useStore((state)=>state["viewtest"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["viewtest"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Image83Props = useStore((state)=>state["viewtest"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["viewtest"]["Image83"]);
const Image83Cb = useImage83Cb()
const Flex122Props = useStore((state)=>state["viewtest"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["viewtest"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Image84Props = useStore((state)=>state["viewtest"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["viewtest"]["Image84"]);
const Image84Cb = useImage84Cb()
const Flex123Props = useStore((state)=>state["viewtest"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["viewtest"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Image85Props = useStore((state)=>state["viewtest"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["viewtest"]["Image85"]);
const Image85Cb = useImage85Cb()
const Flex124Props = useStore((state)=>state["viewtest"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["viewtest"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Image86Props = useStore((state)=>state["viewtest"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["viewtest"]["Image86"]);
const Image86Cb = useImage86Cb()
const Flex125Props = useStore((state)=>state["viewtest"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["viewtest"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex126Props = useStore((state)=>state["viewtest"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["viewtest"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Image87Props = useStore((state)=>state["viewtest"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["viewtest"]["Image87"]);
const Image87Cb = useImage87Cb()
const Button4Props = useStore((state)=>state["viewtest"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["viewtest"]["Button4"]);
const Button4Cb = useButton4Cb()
const Image88Props = useStore((state)=>state["viewtest"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["viewtest"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox57Props = useStore((state)=>state["viewtest"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["viewtest"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image89Props = useStore((state)=>state["viewtest"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["viewtest"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox58Props = useStore((state)=>state["viewtest"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["viewtest"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["viewtest"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["viewtest"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const Image90Props = useStore((state)=>state["viewtest"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["viewtest"]["Image90"]);
const Image90Cb = useImage90Cb()
const Flex127Props = useStore((state)=>state["viewtest"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["viewtest"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const TextBox60Props = useStore((state)=>state["viewtest"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["viewtest"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Image91Props = useStore((state)=>state["viewtest"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["viewtest"]["Image91"]);
const Image91Cb = useImage91Cb()
const Flex128Props = useStore((state)=>state["viewtest"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["viewtest"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const TextBox61Props = useStore((state)=>state["viewtest"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["viewtest"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Image92Props = useStore((state)=>state["viewtest"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["viewtest"]["Image92"]);
const Image92Cb = useImage92Cb()
const Flex129Props = useStore((state)=>state["viewtest"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["viewtest"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const TextBox62Props = useStore((state)=>state["viewtest"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["viewtest"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Image93Props = useStore((state)=>state["viewtest"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["viewtest"]["Image93"]);
const Image93Cb = useImage93Cb()
const Flex130Props = useStore((state)=>state["viewtest"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["viewtest"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const TextBox63Props = useStore((state)=>state["viewtest"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["viewtest"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Image94Props = useStore((state)=>state["viewtest"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["viewtest"]["Image94"]);
const Image94Cb = useImage94Cb()
const Flex131Props = useStore((state)=>state["viewtest"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["viewtest"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const TextBox64Props = useStore((state)=>state["viewtest"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["viewtest"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image95Props = useStore((state)=>state["viewtest"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["viewtest"]["Image95"]);
const Image95Cb = useImage95Cb()
const Flex132Props = useStore((state)=>state["viewtest"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["viewtest"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const TextBox65Props = useStore((state)=>state["viewtest"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["viewtest"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image96Props = useStore((state)=>state["viewtest"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["viewtest"]["Image96"]);
const Image96Cb = useImage96Cb()
const Flex133Props = useStore((state)=>state["viewtest"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["viewtest"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const TextBox66Props = useStore((state)=>state["viewtest"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["viewtest"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image97Props = useStore((state)=>state["viewtest"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["viewtest"]["Image97"]);
const Image97Cb = useImage97Cb()
const Flex134Props = useStore((state)=>state["viewtest"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["viewtest"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const TextBox67Props = useStore((state)=>state["viewtest"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["viewtest"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Image98Props = useStore((state)=>state["viewtest"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["viewtest"]["Image98"]);
const Image98Cb = useImage98Cb()
const Flex135Props = useStore((state)=>state["viewtest"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["viewtest"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex136Props = useStore((state)=>state["viewtest"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["viewtest"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Image99Props = useStore((state)=>state["viewtest"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["viewtest"]["Image99"]);
const Image99Cb = useImage99Cb()
const TextBox68Props = useStore((state)=>state["viewtest"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["viewtest"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Flex137Props = useStore((state)=>state["viewtest"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["viewtest"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex138Props = useStore((state)=>state["viewtest"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["viewtest"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex139Props = useStore((state)=>state["viewtest"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["viewtest"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const TextBox69Props = useStore((state)=>state["viewtest"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["viewtest"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["viewtest"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["viewtest"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Flex140Props = useStore((state)=>state["viewtest"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["viewtest"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex141Props = useStore((state)=>state["viewtest"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["viewtest"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Flex142Props = useStore((state)=>state["viewtest"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["viewtest"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex143Props = useStore((state)=>state["viewtest"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["viewtest"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex144Props = useStore((state)=>state["viewtest"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["viewtest"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex145Props = useStore((state)=>state["viewtest"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["viewtest"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex146Props = useStore((state)=>state["viewtest"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["viewtest"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex147Props = useStore((state)=>state["viewtest"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["viewtest"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex148Props = useStore((state)=>state["viewtest"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["viewtest"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["viewtest"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["viewtest"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex150Props = useStore((state)=>state["viewtest"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["viewtest"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex151Props = useStore((state)=>state["viewtest"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["viewtest"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex152Props = useStore((state)=>state["viewtest"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["viewtest"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex153Props = useStore((state)=>state["viewtest"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["viewtest"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex154Props = useStore((state)=>state["viewtest"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["viewtest"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Flex155Props = useStore((state)=>state["viewtest"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["viewtest"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex156Props = useStore((state)=>state["viewtest"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["viewtest"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex157Props = useStore((state)=>state["viewtest"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["viewtest"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex158Props = useStore((state)=>state["viewtest"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["viewtest"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex159Props = useStore((state)=>state["viewtest"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["viewtest"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex160Props = useStore((state)=>state["viewtest"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["viewtest"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex161Props = useStore((state)=>state["viewtest"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["viewtest"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex162Props = useStore((state)=>state["viewtest"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["viewtest"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex163Props = useStore((state)=>state["viewtest"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["viewtest"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex164Props = useStore((state)=>state["viewtest"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["viewtest"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Flex165Props = useStore((state)=>state["viewtest"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["viewtest"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex166Props = useStore((state)=>state["viewtest"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["viewtest"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex167Props = useStore((state)=>state["viewtest"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["viewtest"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Flex168Props = useStore((state)=>state["viewtest"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["viewtest"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex169Props = useStore((state)=>state["viewtest"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["viewtest"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex170Props = useStore((state)=>state["viewtest"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["viewtest"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex171Props = useStore((state)=>state["viewtest"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["viewtest"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Image101Props = useStore((state)=>state["viewtest"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["viewtest"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox72Props = useStore((state)=>state["viewtest"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["viewtest"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox73Props = useStore((state)=>state["viewtest"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["viewtest"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Button6Props = useStore((state)=>state["viewtest"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["viewtest"]["Button6"]);
const Button6Cb = useButton6Cb()
const Image102Props = useStore((state)=>state["viewtest"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["viewtest"]["Image102"]);
const Image102Cb = useImage102Cb()
const TextBox74Props = useStore((state)=>state["viewtest"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["viewtest"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["viewtest"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["viewtest"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Flex181Props = useStore((state)=>state["viewtest"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["viewtest"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Flex182Props = useStore((state)=>state["viewtest"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["viewtest"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex183Props = useStore((state)=>state["viewtest"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["viewtest"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex184Props = useStore((state)=>state["viewtest"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["viewtest"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex185Props = useStore((state)=>state["viewtest"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["viewtest"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex186Props = useStore((state)=>state["viewtest"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["viewtest"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const TextBox76Props = useStore((state)=>state["viewtest"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["viewtest"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Button8Props = useStore((state)=>state["viewtest"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["viewtest"]["Button8"]);
const Button8Cb = useButton8Cb()
const Image103Props = useStore((state)=>state["viewtest"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["viewtest"]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox77Props = useStore((state)=>state["viewtest"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["viewtest"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const Image104Props = useStore((state)=>state["viewtest"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["viewtest"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox78Props = useStore((state)=>state["viewtest"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["viewtest"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Flex187Props = useStore((state)=>state["viewtest"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["viewtest"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex188Props = useStore((state)=>state["viewtest"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["viewtest"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex189Props = useStore((state)=>state["viewtest"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["viewtest"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const TextBox79Props = useStore((state)=>state["viewtest"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["viewtest"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["viewtest"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["viewtest"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Flex190Props = useStore((state)=>state["viewtest"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["viewtest"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex191Props = useStore((state)=>state["viewtest"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["viewtest"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex192Props = useStore((state)=>state["viewtest"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["viewtest"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Image105Props = useStore((state)=>state["viewtest"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["viewtest"]["Image105"]);
const Image105Cb = useImage105Cb()
const Flex193Props = useStore((state)=>state["viewtest"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["viewtest"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex194Props = useStore((state)=>state["viewtest"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["viewtest"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Button9Props = useStore((state)=>state["viewtest"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["viewtest"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox81Props = useStore((state)=>state["viewtest"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["viewtest"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Flex197Props = useStore((state)=>state["viewtest"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["viewtest"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const TextBox82Props = useStore((state)=>state["viewtest"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["viewtest"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Flex198Props = useStore((state)=>state["viewtest"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["viewtest"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex199Props = useStore((state)=>state["viewtest"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["viewtest"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const TextBox83Props = useStore((state)=>state["viewtest"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["viewtest"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Button10Props = useStore((state)=>state["viewtest"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["viewtest"]["Button10"]);
const Button10Cb = useButton10Cb()
const Flex200Props = useStore((state)=>state["viewtest"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["viewtest"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex201Props = useStore((state)=>state["viewtest"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["viewtest"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const TextBox85Props = useStore((state)=>state["viewtest"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["viewtest"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const Button11Props = useStore((state)=>state["viewtest"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["viewtest"]["Button11"]);
const Button11Cb = useButton11Cb()
const Flex202Props = useStore((state)=>state["viewtest"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["viewtest"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex203Props = useStore((state)=>state["viewtest"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["viewtest"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const TextBox87Props = useStore((state)=>state["viewtest"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["viewtest"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const Button12Props = useStore((state)=>state["viewtest"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["viewtest"]["Button12"]);
const Button12Cb = useButton12Cb()
const Flex204Props = useStore((state)=>state["viewtest"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["viewtest"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex205Props = useStore((state)=>state["viewtest"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["viewtest"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const TextBox89Props = useStore((state)=>state["viewtest"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["viewtest"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const Button13Props = useStore((state)=>state["viewtest"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["viewtest"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button14Props = useStore((state)=>state["viewtest"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["viewtest"]["Button14"]);
const Button14Cb = useButton14Cb()
const TextBox91Props = useStore((state)=>state["viewtest"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["viewtest"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const Flex208Props = useStore((state)=>state["viewtest"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["viewtest"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const Flex209Props = useStore((state)=>state["viewtest"]["Flex209"]);
const Flex209IoProps = useIoStore((state)=>state["viewtest"]["Flex209"]);
const Flex209Cb = useFlex209Cb()
const TextBox93Props = useStore((state)=>state["viewtest"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["viewtest"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["viewtest"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["viewtest"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["viewtest"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["viewtest"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["viewtest"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["viewtest"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Flex210Props = useStore((state)=>state["viewtest"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["viewtest"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const Flex211Props = useStore((state)=>state["viewtest"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["viewtest"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Image106Props = useStore((state)=>state["viewtest"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["viewtest"]["Image106"]);
const Image106Cb = useImage106Cb()
const Image107Props = useStore((state)=>state["viewtest"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["viewtest"]["Image107"]);
const Image107Cb = useImage107Cb()
const Image108Props = useStore((state)=>state["viewtest"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["viewtest"]["Image108"]);
const Image108Cb = useImage108Cb()
const Button15Props = useStore((state)=>state["viewtest"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["viewtest"]["Button15"]);
const Button15Cb = useButton15Cb()
const Flex212Props = useStore((state)=>state["viewtest"]["Flex212"]);
const Flex212IoProps = useIoStore((state)=>state["viewtest"]["Flex212"]);
const Flex212Cb = useFlex212Cb()
const Flex213Props = useStore((state)=>state["viewtest"]["Flex213"]);
const Flex213IoProps = useIoStore((state)=>state["viewtest"]["Flex213"]);
const Flex213Cb = useFlex213Cb()
const TextBox97Props = useStore((state)=>state["viewtest"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["viewtest"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Flex214Props = useStore((state)=>state["viewtest"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["viewtest"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const Flex215Props = useStore((state)=>state["viewtest"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["viewtest"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const Flex216Props = useStore((state)=>state["viewtest"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["viewtest"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Image109Props = useStore((state)=>state["viewtest"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["viewtest"]["Image109"]);
const Image109Cb = useImage109Cb()
const TextBox98Props = useStore((state)=>state["viewtest"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["viewtest"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["viewtest"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["viewtest"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["viewtest"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["viewtest"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Flex218Props = useStore((state)=>state["viewtest"]["Flex218"]);
const Flex218IoProps = useIoStore((state)=>state["viewtest"]["Flex218"]);
const Flex218Cb = useFlex218Cb()
const TextBox101Props = useStore((state)=>state["viewtest"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["viewtest"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["viewtest"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["viewtest"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["viewtest"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["viewtest"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const Image110Props = useStore((state)=>state["viewtest"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["viewtest"]["Image110"]);
const Image110Cb = useImage110Cb()
const Flex219Props = useStore((state)=>state["viewtest"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["viewtest"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex220Props = useStore((state)=>state["viewtest"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["viewtest"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Flex221Props = useStore((state)=>state["viewtest"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["viewtest"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const Image111Props = useStore((state)=>state["viewtest"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["viewtest"]["Image111"]);
const Image111Cb = useImage111Cb()
const TextBox104Props = useStore((state)=>state["viewtest"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["viewtest"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["viewtest"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["viewtest"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["viewtest"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["viewtest"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Flex222Props = useStore((state)=>state["viewtest"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["viewtest"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex223Props = useStore((state)=>state["viewtest"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["viewtest"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["viewtest"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["viewtest"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex225Props = useStore((state)=>state["viewtest"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["viewtest"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Input1Props = useStore((state)=>state["viewtest"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["viewtest"]["Input1"]);
const Input1Cb = useInput1Cb()
const Flex226Props = useStore((state)=>state["viewtest"]["Flex226"]);
const Flex226IoProps = useIoStore((state)=>state["viewtest"]["Flex226"]);
const Flex226Cb = useFlex226Cb()
const Button16Props = useStore((state)=>state["viewtest"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["viewtest"]["Button16"]);
const Button16Cb = useButton16Cb()
const Button20Props = useStore((state)=>state["viewtest"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["viewtest"]["Button20"]);
const Button20Cb = useButton20Cb()

  return (<>
  <Flex1 {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<Flex1 {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<Flex1 {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<Image1 {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
</Flex1>
<Flex1 {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<TextBox1 {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox1 {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Flex1>
<Flex1 {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<Button1 {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<TextBox1 {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<Flex1 {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<Flex1 {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<TextBox1 {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox1 {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex1>
<Flex1 {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<Flex1 {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<Image1 {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
<TextBox1 {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex1>
<Flex1 {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Button1 {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex1>
<Flex1 {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<TextBox1 {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<Image1 {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<Flex1 {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Flex1 {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Image1 {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
</Flex1>
</Flex1>
<Flex1 {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Flex1 {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex1 {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Button1 {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<TextBox1 {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Flex1>
<TextBox1 {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex1>
<Flex1 {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Flex1 {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<Button1 {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<TextBox1 {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex1>
<TextBox1 {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Flex1>
<Flex1 {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<Flex1 {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Button1 {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<TextBox1 {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Flex1>
<TextBox1 {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex1>
<Flex1 {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<Flex1 {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Button1 {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<TextBox1 {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex1>
<TextBox1 {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex1>
<Flex1 {...Flex209Props} {...Flex209Cb} {...Flex209IoProps}>
<Flex1 {...Flex208Props} {...Flex208Cb} {...Flex208IoProps}>
<Button1 {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
<TextBox1 {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
</Flex1>
<TextBox1 {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<Image1 {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<Image1 {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<Image1 {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
</Flex1>
<Flex1 {...Flex212Props} {...Flex212Cb} {...Flex212IoProps}>
<Button1 {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
<Flex1 {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<Input {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
<Flex1 {...Flex226Props} {...Flex226Cb} {...Flex226IoProps}>
<Button1 {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 {...Flex213Props} {...Flex213Cb} {...Flex213IoProps}>
<TextBox1 {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<Flex1 {...Flex218Props} {...Flex218Cb} {...Flex218IoProps}>
<Flex1 {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<Flex1 {...Flex215Props} {...Flex215Cb} {...Flex215IoProps}>
<Image1 {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
</Flex1>
<Flex1 {...Flex216Props} {...Flex216Cb} {...Flex216IoProps}>
<TextBox1 {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<TextBox1 {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox1 {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Flex1>
</Flex1>
<Flex1 {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Flex1 {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<Image1 {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
</Flex1>
<Flex1 {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<TextBox1 {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox1 {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox1 {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex1>
</Flex1>
<Flex1 {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Flex1 {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Image1 {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
</Flex1>
<Flex1 {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<TextBox1 {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox1 {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox1 {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
