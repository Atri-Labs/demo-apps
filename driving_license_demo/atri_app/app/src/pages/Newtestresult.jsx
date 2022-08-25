import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useTextBox114Cb, useTextBox115Cb, useTextBox116Cb, useImage116Cb, useImage117Cb, useTextBox117Cb, useTextBox118Cb, useTextBox119Cb, useTextBox120Cb, useTextBox121Cb, useTextBox122Cb, useImage118Cb, useTextBox123Cb, useButton22Cb, useButton23Cb, useTextBox124Cb, useButton24Cb, useTextBox125Cb, useButton25Cb, useTextBox126Cb, useTextBox127Cb, useButton26Cb, useFlex240Cb, useFlex241Cb, useFlex242Cb, useFlex243Cb, useFlex244Cb, useFlex245Cb, useButton27Cb, useTextBox128Cb, useFlex246Cb, useTextBox129Cb, useFlex247Cb, useTextBox130Cb, useFlex248Cb, useTextBox131Cb, useFlex249Cb, useTextBox132Cb, useFlex250Cb, useImage119Cb, useTextBox133Cb, useImage120Cb, useTextBox134Cb, useImage121Cb, useButton28Cb, useFlex251Cb, useFlex252Cb, useFlex253Cb, useFlex254Cb, useInput2Cb, useFlex255Cb, useFlex256Cb, useFlex257Cb, useFlex258Cb, useFlex259Cb, useFlex260Cb, useTextBox135Cb, useTextBox136Cb, useFlex261Cb, useFlex262Cb, useFlex263Cb, useFlex265Cb, useButton29Cb, useImage122Cb, useImage123Cb, useImage124Cb, useFlex266Cb, useFlex267Cb, useFlex268Cb, useFlex269Cb, useImage125Cb, useTextBox139Cb, useTextBox140Cb, useButton30Cb, useImage126Cb, useTextBox141Cb, useTextBox142Cb, useButton31Cb, useImage127Cb, useTextBox143Cb, useTextBox144Cb, useButton32Cb, useImage128Cb, useTextBox145Cb, useTextBox146Cb, useButton33Cb, useImage129Cb, useTextBox147Cb, useTextBox148Cb, useButton34Cb, useImage130Cb, useTextBox149Cb, useTextBox150Cb, useButton35Cb, useFlex301Cb, useFlex302Cb, useFlex303Cb, useFlex304Cb, useFlex305Cb, useTextBox151Cb, useTextBox152Cb, useTextBox153Cb, useImage131Cb, useImage132Cb, useTextBox154Cb, useTextBox155Cb, useTextBox156Cb, useTextBox157Cb, useTextBox158Cb, useTextBox159Cb, useImage133Cb, useTextBox160Cb, useButton36Cb, useButton37Cb, useTextBox161Cb, useButton38Cb, useTextBox162Cb, useButton39Cb, useTextBox163Cb, useTextBox164Cb, useButton40Cb, useFlex306Cb, useFlex307Cb, useFlex308Cb, useFlex309Cb, useFlex310Cb, useFlex311Cb, useTextBox165Cb, useFlex312Cb, useTextBox166Cb, useFlex313Cb, useTextBox167Cb, useFlex314Cb, useTextBox168Cb, useFlex315Cb, useTextBox169Cb, useFlex316Cb, useImage134Cb, useTextBox170Cb, useImage135Cb, useTextBox171Cb, useImage136Cb, useButton42Cb, useFlex317Cb, useFlex318Cb, useFlex319Cb, useFlex320Cb, useInput3Cb, useFlex321Cb, useFlex322Cb, useFlex323Cb, useFlex324Cb, useFlex325Cb, useFlex326Cb, useTextBox172Cb, useTextBox173Cb, useFlex327Cb, useFlex328Cb, useFlex329Cb, useFlex331Cb, useButton43Cb, useImage137Cb, useImage138Cb, useImage139Cb, useFlex332Cb, useFlex333Cb, useFlex334Cb, useFlex335Cb, useFlex337Cb, useFlex338Cb, useFlex339Cb, useFlex340Cb, useTextBox175Cb, useFlex341Cb, useImage141Cb, useTextBox177Cb, useFlex343Cb, useFlex344Cb, useButton46Cb } from "../page-cbs/newtestresult";

export default function Newtestresult() {
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
    setEffectivePropsForPage("newtestresult")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("newtestresult")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const TextBox114Props = useStore((state)=>state["newtestresult"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["newtestresult"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["newtestresult"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["newtestresult"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["newtestresult"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["newtestresult"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const Image116Props = useStore((state)=>state["newtestresult"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["newtestresult"]["Image116"]);
const Image116Cb = useImage116Cb()
const Image117Props = useStore((state)=>state["newtestresult"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["newtestresult"]["Image117"]);
const Image117Cb = useImage117Cb()
const TextBox117Props = useStore((state)=>state["newtestresult"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["newtestresult"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["newtestresult"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["newtestresult"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["newtestresult"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["newtestresult"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["newtestresult"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["newtestresult"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["newtestresult"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["newtestresult"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["newtestresult"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["newtestresult"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Image118Props = useStore((state)=>state["newtestresult"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["newtestresult"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox123Props = useStore((state)=>state["newtestresult"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["newtestresult"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Button22Props = useStore((state)=>state["newtestresult"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["newtestresult"]["Button22"]);
const Button22Cb = useButton22Cb()
const Button23Props = useStore((state)=>state["newtestresult"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["newtestresult"]["Button23"]);
const Button23Cb = useButton23Cb()
const TextBox124Props = useStore((state)=>state["newtestresult"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["newtestresult"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const Button24Props = useStore((state)=>state["newtestresult"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["newtestresult"]["Button24"]);
const Button24Cb = useButton24Cb()
const TextBox125Props = useStore((state)=>state["newtestresult"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["newtestresult"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Button25Props = useStore((state)=>state["newtestresult"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["newtestresult"]["Button25"]);
const Button25Cb = useButton25Cb()
const TextBox126Props = useStore((state)=>state["newtestresult"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["newtestresult"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["newtestresult"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["newtestresult"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const Button26Props = useStore((state)=>state["newtestresult"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["newtestresult"]["Button26"]);
const Button26Cb = useButton26Cb()
const Flex240Props = useStore((state)=>state["newtestresult"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["newtestresult"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex241Props = useStore((state)=>state["newtestresult"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["newtestresult"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex242Props = useStore((state)=>state["newtestresult"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["newtestresult"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex243Props = useStore((state)=>state["newtestresult"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["newtestresult"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex244Props = useStore((state)=>state["newtestresult"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["newtestresult"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Flex245Props = useStore((state)=>state["newtestresult"]["Flex245"]);
const Flex245IoProps = useIoStore((state)=>state["newtestresult"]["Flex245"]);
const Flex245Cb = useFlex245Cb()
const Button27Props = useStore((state)=>state["newtestresult"]["Button27"]);
const Button27IoProps = useIoStore((state)=>state["newtestresult"]["Button27"]);
const Button27Cb = useButton27Cb()
const TextBox128Props = useStore((state)=>state["newtestresult"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["newtestresult"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const Flex246Props = useStore((state)=>state["newtestresult"]["Flex246"]);
const Flex246IoProps = useIoStore((state)=>state["newtestresult"]["Flex246"]);
const Flex246Cb = useFlex246Cb()
const TextBox129Props = useStore((state)=>state["newtestresult"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["newtestresult"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const Flex247Props = useStore((state)=>state["newtestresult"]["Flex247"]);
const Flex247IoProps = useIoStore((state)=>state["newtestresult"]["Flex247"]);
const Flex247Cb = useFlex247Cb()
const TextBox130Props = useStore((state)=>state["newtestresult"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["newtestresult"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Flex248Props = useStore((state)=>state["newtestresult"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["newtestresult"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const TextBox131Props = useStore((state)=>state["newtestresult"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["newtestresult"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const Flex249Props = useStore((state)=>state["newtestresult"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["newtestresult"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const TextBox132Props = useStore((state)=>state["newtestresult"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["newtestresult"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Flex250Props = useStore((state)=>state["newtestresult"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["newtestresult"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Image119Props = useStore((state)=>state["newtestresult"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["newtestresult"]["Image119"]);
const Image119Cb = useImage119Cb()
const TextBox133Props = useStore((state)=>state["newtestresult"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["newtestresult"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Image120Props = useStore((state)=>state["newtestresult"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["newtestresult"]["Image120"]);
const Image120Cb = useImage120Cb()
const TextBox134Props = useStore((state)=>state["newtestresult"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["newtestresult"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Image121Props = useStore((state)=>state["newtestresult"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["newtestresult"]["Image121"]);
const Image121Cb = useImage121Cb()
const Button28Props = useStore((state)=>state["newtestresult"]["Button28"]);
const Button28IoProps = useIoStore((state)=>state["newtestresult"]["Button28"]);
const Button28Cb = useButton28Cb()
const Flex251Props = useStore((state)=>state["newtestresult"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["newtestresult"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex252Props = useStore((state)=>state["newtestresult"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["newtestresult"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex253Props = useStore((state)=>state["newtestresult"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["newtestresult"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex254Props = useStore((state)=>state["newtestresult"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["newtestresult"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Input2Props = useStore((state)=>state["newtestresult"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["newtestresult"]["Input2"]);
const Input2Cb = useInput2Cb()
const Flex255Props = useStore((state)=>state["newtestresult"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["newtestresult"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex256Props = useStore((state)=>state["newtestresult"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["newtestresult"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex257Props = useStore((state)=>state["newtestresult"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["newtestresult"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex258Props = useStore((state)=>state["newtestresult"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["newtestresult"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex259Props = useStore((state)=>state["newtestresult"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["newtestresult"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Flex260Props = useStore((state)=>state["newtestresult"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["newtestresult"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const TextBox135Props = useStore((state)=>state["newtestresult"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["newtestresult"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["newtestresult"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["newtestresult"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const Flex261Props = useStore((state)=>state["newtestresult"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["newtestresult"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex262Props = useStore((state)=>state["newtestresult"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["newtestresult"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex263Props = useStore((state)=>state["newtestresult"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["newtestresult"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Flex265Props = useStore((state)=>state["newtestresult"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["newtestresult"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Button29Props = useStore((state)=>state["newtestresult"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["newtestresult"]["Button29"]);
const Button29Cb = useButton29Cb()
const Image122Props = useStore((state)=>state["newtestresult"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["newtestresult"]["Image122"]);
const Image122Cb = useImage122Cb()
const Image123Props = useStore((state)=>state["newtestresult"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["newtestresult"]["Image123"]);
const Image123Cb = useImage123Cb()
const Image124Props = useStore((state)=>state["newtestresult"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["newtestresult"]["Image124"]);
const Image124Cb = useImage124Cb()
const Flex266Props = useStore((state)=>state["newtestresult"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["newtestresult"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex267Props = useStore((state)=>state["newtestresult"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["newtestresult"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex268Props = useStore((state)=>state["newtestresult"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["newtestresult"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex269Props = useStore((state)=>state["newtestresult"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["newtestresult"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Image125Props = useStore((state)=>state["newtestresult"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["newtestresult"]["Image125"]);
const Image125Cb = useImage125Cb()
const TextBox139Props = useStore((state)=>state["newtestresult"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["newtestresult"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["newtestresult"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["newtestresult"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const Button30Props = useStore((state)=>state["newtestresult"]["Button30"]);
const Button30IoProps = useIoStore((state)=>state["newtestresult"]["Button30"]);
const Button30Cb = useButton30Cb()
const Image126Props = useStore((state)=>state["newtestresult"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["newtestresult"]["Image126"]);
const Image126Cb = useImage126Cb()
const TextBox141Props = useStore((state)=>state["newtestresult"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["newtestresult"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["newtestresult"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["newtestresult"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Button31Props = useStore((state)=>state["newtestresult"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["newtestresult"]["Button31"]);
const Button31Cb = useButton31Cb()
const Image127Props = useStore((state)=>state["newtestresult"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["newtestresult"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox143Props = useStore((state)=>state["newtestresult"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["newtestresult"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["newtestresult"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["newtestresult"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Button32Props = useStore((state)=>state["newtestresult"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["newtestresult"]["Button32"]);
const Button32Cb = useButton32Cb()
const Image128Props = useStore((state)=>state["newtestresult"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["newtestresult"]["Image128"]);
const Image128Cb = useImage128Cb()
const TextBox145Props = useStore((state)=>state["newtestresult"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["newtestresult"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox146Props = useStore((state)=>state["newtestresult"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["newtestresult"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const Button33Props = useStore((state)=>state["newtestresult"]["Button33"]);
const Button33IoProps = useIoStore((state)=>state["newtestresult"]["Button33"]);
const Button33Cb = useButton33Cb()
const Image129Props = useStore((state)=>state["newtestresult"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["newtestresult"]["Image129"]);
const Image129Cb = useImage129Cb()
const TextBox147Props = useStore((state)=>state["newtestresult"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["newtestresult"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["newtestresult"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["newtestresult"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const Button34Props = useStore((state)=>state["newtestresult"]["Button34"]);
const Button34IoProps = useIoStore((state)=>state["newtestresult"]["Button34"]);
const Button34Cb = useButton34Cb()
const Image130Props = useStore((state)=>state["newtestresult"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["newtestresult"]["Image130"]);
const Image130Cb = useImage130Cb()
const TextBox149Props = useStore((state)=>state["newtestresult"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["newtestresult"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["newtestresult"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["newtestresult"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const Button35Props = useStore((state)=>state["newtestresult"]["Button35"]);
const Button35IoProps = useIoStore((state)=>state["newtestresult"]["Button35"]);
const Button35Cb = useButton35Cb()
const Flex301Props = useStore((state)=>state["newtestresult"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["newtestresult"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Flex302Props = useStore((state)=>state["newtestresult"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["newtestresult"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex303Props = useStore((state)=>state["newtestresult"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["newtestresult"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex304Props = useStore((state)=>state["newtestresult"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["newtestresult"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex305Props = useStore((state)=>state["newtestresult"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["newtestresult"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const TextBox151Props = useStore((state)=>state["newtestresult"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["newtestresult"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const TextBox152Props = useStore((state)=>state["newtestresult"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["newtestresult"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["newtestresult"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["newtestresult"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const Image131Props = useStore((state)=>state["newtestresult"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["newtestresult"]["Image131"]);
const Image131Cb = useImage131Cb()
const Image132Props = useStore((state)=>state["newtestresult"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["newtestresult"]["Image132"]);
const Image132Cb = useImage132Cb()
const TextBox154Props = useStore((state)=>state["newtestresult"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["newtestresult"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["newtestresult"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["newtestresult"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["newtestresult"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["newtestresult"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["newtestresult"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["newtestresult"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["newtestresult"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["newtestresult"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["newtestresult"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["newtestresult"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const Image133Props = useStore((state)=>state["newtestresult"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["newtestresult"]["Image133"]);
const Image133Cb = useImage133Cb()
const TextBox160Props = useStore((state)=>state["newtestresult"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["newtestresult"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Button36Props = useStore((state)=>state["newtestresult"]["Button36"]);
const Button36IoProps = useIoStore((state)=>state["newtestresult"]["Button36"]);
const Button36Cb = useButton36Cb()
const Button37Props = useStore((state)=>state["newtestresult"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["newtestresult"]["Button37"]);
const Button37Cb = useButton37Cb()
const TextBox161Props = useStore((state)=>state["newtestresult"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["newtestresult"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Button38Props = useStore((state)=>state["newtestresult"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["newtestresult"]["Button38"]);
const Button38Cb = useButton38Cb()
const TextBox162Props = useStore((state)=>state["newtestresult"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["newtestresult"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Button39Props = useStore((state)=>state["newtestresult"]["Button39"]);
const Button39IoProps = useIoStore((state)=>state["newtestresult"]["Button39"]);
const Button39Cb = useButton39Cb()
const TextBox163Props = useStore((state)=>state["newtestresult"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["newtestresult"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["newtestresult"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["newtestresult"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Button40Props = useStore((state)=>state["newtestresult"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["newtestresult"]["Button40"]);
const Button40Cb = useButton40Cb()
const Flex306Props = useStore((state)=>state["newtestresult"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["newtestresult"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Flex307Props = useStore((state)=>state["newtestresult"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["newtestresult"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex308Props = useStore((state)=>state["newtestresult"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["newtestresult"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex309Props = useStore((state)=>state["newtestresult"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["newtestresult"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Flex310Props = useStore((state)=>state["newtestresult"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["newtestresult"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const Flex311Props = useStore((state)=>state["newtestresult"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["newtestresult"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const TextBox165Props = useStore((state)=>state["newtestresult"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["newtestresult"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const Flex312Props = useStore((state)=>state["newtestresult"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["newtestresult"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const TextBox166Props = useStore((state)=>state["newtestresult"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["newtestresult"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const Flex313Props = useStore((state)=>state["newtestresult"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["newtestresult"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const TextBox167Props = useStore((state)=>state["newtestresult"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["newtestresult"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Flex314Props = useStore((state)=>state["newtestresult"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["newtestresult"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const TextBox168Props = useStore((state)=>state["newtestresult"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["newtestresult"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Flex315Props = useStore((state)=>state["newtestresult"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["newtestresult"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const TextBox169Props = useStore((state)=>state["newtestresult"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["newtestresult"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Flex316Props = useStore((state)=>state["newtestresult"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["newtestresult"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Image134Props = useStore((state)=>state["newtestresult"]["Image134"]);
const Image134IoProps = useIoStore((state)=>state["newtestresult"]["Image134"]);
const Image134Cb = useImage134Cb()
const TextBox170Props = useStore((state)=>state["newtestresult"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["newtestresult"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image135Props = useStore((state)=>state["newtestresult"]["Image135"]);
const Image135IoProps = useIoStore((state)=>state["newtestresult"]["Image135"]);
const Image135Cb = useImage135Cb()
const TextBox171Props = useStore((state)=>state["newtestresult"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["newtestresult"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Image136Props = useStore((state)=>state["newtestresult"]["Image136"]);
const Image136IoProps = useIoStore((state)=>state["newtestresult"]["Image136"]);
const Image136Cb = useImage136Cb()
const Button42Props = useStore((state)=>state["newtestresult"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["newtestresult"]["Button42"]);
const Button42Cb = useButton42Cb()
const Flex317Props = useStore((state)=>state["newtestresult"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["newtestresult"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex318Props = useStore((state)=>state["newtestresult"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["newtestresult"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex319Props = useStore((state)=>state["newtestresult"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["newtestresult"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex320Props = useStore((state)=>state["newtestresult"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["newtestresult"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Input3Props = useStore((state)=>state["newtestresult"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["newtestresult"]["Input3"]);
const Input3Cb = useInput3Cb()
const Flex321Props = useStore((state)=>state["newtestresult"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["newtestresult"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex322Props = useStore((state)=>state["newtestresult"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["newtestresult"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex323Props = useStore((state)=>state["newtestresult"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["newtestresult"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Flex324Props = useStore((state)=>state["newtestresult"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["newtestresult"]["Flex324"]);
const Flex324Cb = useFlex324Cb()
const Flex325Props = useStore((state)=>state["newtestresult"]["Flex325"]);
const Flex325IoProps = useIoStore((state)=>state["newtestresult"]["Flex325"]);
const Flex325Cb = useFlex325Cb()
const Flex326Props = useStore((state)=>state["newtestresult"]["Flex326"]);
const Flex326IoProps = useIoStore((state)=>state["newtestresult"]["Flex326"]);
const Flex326Cb = useFlex326Cb()
const TextBox172Props = useStore((state)=>state["newtestresult"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["newtestresult"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["newtestresult"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["newtestresult"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Flex327Props = useStore((state)=>state["newtestresult"]["Flex327"]);
const Flex327IoProps = useIoStore((state)=>state["newtestresult"]["Flex327"]);
const Flex327Cb = useFlex327Cb()
const Flex328Props = useStore((state)=>state["newtestresult"]["Flex328"]);
const Flex328IoProps = useIoStore((state)=>state["newtestresult"]["Flex328"]);
const Flex328Cb = useFlex328Cb()
const Flex329Props = useStore((state)=>state["newtestresult"]["Flex329"]);
const Flex329IoProps = useIoStore((state)=>state["newtestresult"]["Flex329"]);
const Flex329Cb = useFlex329Cb()
const Flex331Props = useStore((state)=>state["newtestresult"]["Flex331"]);
const Flex331IoProps = useIoStore((state)=>state["newtestresult"]["Flex331"]);
const Flex331Cb = useFlex331Cb()
const Button43Props = useStore((state)=>state["newtestresult"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["newtestresult"]["Button43"]);
const Button43Cb = useButton43Cb()
const Image137Props = useStore((state)=>state["newtestresult"]["Image137"]);
const Image137IoProps = useIoStore((state)=>state["newtestresult"]["Image137"]);
const Image137Cb = useImage137Cb()
const Image138Props = useStore((state)=>state["newtestresult"]["Image138"]);
const Image138IoProps = useIoStore((state)=>state["newtestresult"]["Image138"]);
const Image138Cb = useImage138Cb()
const Image139Props = useStore((state)=>state["newtestresult"]["Image139"]);
const Image139IoProps = useIoStore((state)=>state["newtestresult"]["Image139"]);
const Image139Cb = useImage139Cb()
const Flex332Props = useStore((state)=>state["newtestresult"]["Flex332"]);
const Flex332IoProps = useIoStore((state)=>state["newtestresult"]["Flex332"]);
const Flex332Cb = useFlex332Cb()
const Flex333Props = useStore((state)=>state["newtestresult"]["Flex333"]);
const Flex333IoProps = useIoStore((state)=>state["newtestresult"]["Flex333"]);
const Flex333Cb = useFlex333Cb()
const Flex334Props = useStore((state)=>state["newtestresult"]["Flex334"]);
const Flex334IoProps = useIoStore((state)=>state["newtestresult"]["Flex334"]);
const Flex334Cb = useFlex334Cb()
const Flex335Props = useStore((state)=>state["newtestresult"]["Flex335"]);
const Flex335IoProps = useIoStore((state)=>state["newtestresult"]["Flex335"]);
const Flex335Cb = useFlex335Cb()
const Flex337Props = useStore((state)=>state["newtestresult"]["Flex337"]);
const Flex337IoProps = useIoStore((state)=>state["newtestresult"]["Flex337"]);
const Flex337Cb = useFlex337Cb()
const Flex338Props = useStore((state)=>state["newtestresult"]["Flex338"]);
const Flex338IoProps = useIoStore((state)=>state["newtestresult"]["Flex338"]);
const Flex338Cb = useFlex338Cb()
const Flex339Props = useStore((state)=>state["newtestresult"]["Flex339"]);
const Flex339IoProps = useIoStore((state)=>state["newtestresult"]["Flex339"]);
const Flex339Cb = useFlex339Cb()
const Flex340Props = useStore((state)=>state["newtestresult"]["Flex340"]);
const Flex340IoProps = useIoStore((state)=>state["newtestresult"]["Flex340"]);
const Flex340Cb = useFlex340Cb()
const TextBox175Props = useStore((state)=>state["newtestresult"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["newtestresult"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Flex341Props = useStore((state)=>state["newtestresult"]["Flex341"]);
const Flex341IoProps = useIoStore((state)=>state["newtestresult"]["Flex341"]);
const Flex341Cb = useFlex341Cb()
const Image141Props = useStore((state)=>state["newtestresult"]["Image141"]);
const Image141IoProps = useIoStore((state)=>state["newtestresult"]["Image141"]);
const Image141Cb = useImage141Cb()
const TextBox177Props = useStore((state)=>state["newtestresult"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["newtestresult"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Flex343Props = useStore((state)=>state["newtestresult"]["Flex343"]);
const Flex343IoProps = useIoStore((state)=>state["newtestresult"]["Flex343"]);
const Flex343Cb = useFlex343Cb()
const Flex344Props = useStore((state)=>state["newtestresult"]["Flex344"]);
const Flex344IoProps = useIoStore((state)=>state["newtestresult"]["Flex344"]);
const Flex344Cb = useFlex344Cb()
const Button46Props = useStore((state)=>state["newtestresult"]["Button46"]);
const Button46IoProps = useIoStore((state)=>state["newtestresult"]["Button46"]);
const Button46Cb = useButton46Cb()

  return (<>
  <Flex3 {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<Flex3 {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<Flex3 {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<Image3 {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
</Flex3>
<Flex3 {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<TextBox3 {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox3 {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex3>
<Flex3 {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<Button3 {...Button35Props} {...Button35Cb} {...Button35IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 {...Flex341Props} {...Flex341Cb} {...Flex341IoProps}>
<TextBox3 {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<Flex3 {...Flex340Props} {...Flex340Cb} {...Flex340IoProps}>
<Flex3 {...Flex334Props} {...Flex334Cb} {...Flex334IoProps}>
<TextBox3 {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox3 {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Flex3>
<Flex3 {...Flex335Props} {...Flex335Cb} {...Flex335IoProps}>
<Flex3 {...Flex327Props} {...Flex327Cb} {...Flex327IoProps}>
<Image3 {...Image135Props} {...Image135Cb} {...Image135IoProps}/>
<TextBox3 {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex3>
<Flex3 {...Flex329Props} {...Flex329Cb} {...Flex329IoProps}>
<Button3 {...Button42Props} {...Button42Cb} {...Button42IoProps}/>
</Flex3>
<Flex3 {...Flex328Props} {...Flex328Cb} {...Flex328IoProps}>
<TextBox3 {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<Image3 {...Image136Props} {...Image136Cb} {...Image136IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 {...Flex339Props} {...Flex339Cb} {...Flex339IoProps}>
<Flex3 {...Flex333Props} {...Flex333Cb} {...Flex333IoProps}>
<Flex3 {...Flex326Props} {...Flex326Cb} {...Flex326IoProps}>
<Image3 {...Image134Props} {...Image134Cb} {...Image134IoProps}/>
</Flex3>
</Flex3>
<Flex3 {...Flex332Props} {...Flex332Cb} {...Flex332IoProps}>
<Flex3 {...Flex325Props} {...Flex325Cb} {...Flex325IoProps}>
<Flex3 {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Button3 {...Button40Props} {...Button40Cb} {...Button40IoProps}/>
<TextBox3 {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex3>
<TextBox3 {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex3>
<Flex3 {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}>
<Flex3 {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Button3 {...Button39Props} {...Button39Cb} {...Button39IoProps}/>
<TextBox3 {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex3>
<TextBox3 {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex3>
<Flex3 {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<Flex3 {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Button3 {...Button38Props} {...Button38Cb} {...Button38IoProps}/>
<TextBox3 {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex3>
<TextBox3 {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
</Flex3>
<Flex3 {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex3 {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Button3 {...Button37Props} {...Button37Cb} {...Button37IoProps}/>
<TextBox3 {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex3>
<TextBox3 {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Flex3>
<Flex3 {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<Flex3 {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<Button3 {...Button36Props} {...Button36Cb} {...Button36IoProps}/>
<TextBox3 {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex3>
<TextBox3 {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 {...Flex338Props} {...Flex338Cb} {...Flex338IoProps}>
<Image3 {...Image139Props} {...Image139Cb} {...Image139IoProps}/>
<Image3 {...Image138Props} {...Image138Cb} {...Image138IoProps}/>
<Image3 {...Image137Props} {...Image137Cb} {...Image137IoProps}/>
</Flex3>
<Flex3 {...Flex337Props} {...Flex337Cb} {...Flex337IoProps}>
<Button3 {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
<Flex3 {...Flex331Props} {...Flex331Cb} {...Flex331IoProps}>
<Input1 {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
<Flex3 {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<Button3 {...Button46Props} {...Button46Cb} {...Button46IoProps}/>
</Flex3>
</Flex3>
</Flex3>
<Flex3 {...Flex344Props} {...Flex344Cb} {...Flex344IoProps}>
<Flex3 {...Flex343Props} {...Flex343Cb} {...Flex343IoProps}>
<Image3 {...Image141Props} {...Image141Cb} {...Image141IoProps}/>
<TextBox3 {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
</Flex3>
</Flex3>
</Flex3>
  </>);
}
