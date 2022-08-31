import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useTextBox3Cb() {
	const onClick = useCallback(callbackFactory("TextBox3", "background-change", "/background-change", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex6Cb() {
	const onClick = useCallback(callbackFactory("Flex6", "background-change", "/background-change", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex7Cb() {
	const onClick = useCallback(callbackFactory("Flex7", "background-change", "/background-change", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex8Cb() {
	const onClick = useCallback(callbackFactory("Flex8", "background-change", "/background-change", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex9Cb() {
	const onClick = useCallback(callbackFactory("Flex9", "background-change", "/background-change", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage3Cb() {
	const onClick = useCallback(callbackFactory("Image3", "background-change", "/background-change", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage4Cb() {
	const onClick = useCallback(callbackFactory("Image4", "background-change", "/background-change", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useUpload3Cb() {
	const onChange = useCallback(callbackFactory("Upload3", "background-change", "/background-change", "onChange", 
			{
  "handlers": [
    {
      "sendFile": {
        "self": true,
        "props": [
          "io",
          "files"
        ]
      }
    }
  ],
  "actions": [
    {
      "type": "file_input",
      "selector": [
        "io",
        "files"
      ]
    }
  ]
}), [])
	const onClick = useCallback(callbackFactory("Upload3", "background-change", "/background-change", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onClick }
}