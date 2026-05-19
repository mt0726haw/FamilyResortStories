"use client";

import { useState, useEffect } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface Device {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  deviceType: DeviceType;
  width: number;
  /** True when the hook has mounted on the client — useful to avoid hydration flicker */
  mounted: boolean;
}

const DEFAULT: Device = {
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isTouch: false,
  deviceType: "desktop",
  width: 1280,
  mounted: false,
};

/**
 * useDevice — combines user-agent sniffing with viewport width.
 *
 * • A user with an iPhone UA but rotated to landscape still counts as mobile.
 * • A desktop browser shrunk below 640px is treated as mobile (responsive testing).
 * • Touch capability is reported independently from the device class.
 */
export function useDevice(): Device {
  const [device, setDevice] = useState<Device>(DEFAULT);

  useEffect(() => {
    const detect = (): Device => {
      const w = window.innerWidth;
      const ua = navigator.userAgent || "";

      const mobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      const tabletUA = /iPad|Tablet|PlayBook|Silk|Kindle|(Android(?!.*Mobile))/i.test(ua);
      const isTouch  = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // Combine: explicit mobile UA wins, otherwise fall back to viewport buckets.
      const isMobile  = mobileUA || w < 640;
      const isTablet  = !isMobile && (tabletUA || (w >= 640 && w < 1024));
      const isDesktop = !isMobile && !isTablet;

      const deviceType: DeviceType = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

      return { isMobile, isTablet, isDesktop, isTouch, deviceType, width: w, mounted: true };
    };

    setDevice(detect());

    const onResize = () => setDevice(detect());
    window.addEventListener("resize",       onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize",       onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return device;
}
