'use client'

import Script from 'next/script'
import { useCallback } from 'react'

export default function EasyWeekWidgetLoader() {
	const init = useCallback(() => {
		try {
			const w = (window as any)
			if (w.ewWidget) return
			if (typeof (w as any).EasyWeekWidget !== 'function') return
			w.ewWidget = new (w as any).EasyWeekWidget({
				url: 'https://booking.eswk.co.uk/fineline-clinic',
				button: {
					text: 'Book now',
					showText: true,
					color: '#ffffff',
					background: '#36ab48',
					textColor: '#383868',
					textBackground: '#ffffff',
				},
			})
		} catch {
			// ignore init errors; fallback handled by buttons
		}
	}, [])

	return (
		<Script
			src="https://booking.eswk.co.uk/widget.js"
			strategy="afterInteractive"
			onLoad={init}
		/>
	)
}


