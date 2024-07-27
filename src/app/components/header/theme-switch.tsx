'use client'

import {useState, useEffect} from "react"

export default function ThemeSwitch() {

    const isInLight = !window.matchMedia('(prefers-color-scheme: dark)').matches

    const [isLight, setIsLight] = useState<boolean>(isInLight)


}