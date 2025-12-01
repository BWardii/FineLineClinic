'use client'

import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
	ariaLabel?: string
}

export default function OpenWidgetButton({ children, className, ariaLabel }: Props) {
	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const w = window as any
		// Helper to init widget if needed
		const initWidget = () => {
			try {
				if (w.ewWidget && typeof w.ewWidget.open === 'function') return w.ewWidget
				if (typeof w.EasyWeekWidget === 'function') {
					w.ewWidget = new w.EasyWeekWidget({
						url: 'https://booking.eswk.co.uk/fineline-clinic',
						button: { text: 'Book now', showText: true, color: '#ffffff', background: '#36ab48', textColor: '#383868', textBackground: '#ffffff' },
					})
					return w.ewWidget
				}
				return null
			} catch { return null }
		}

		let widget = initWidget()
		if (!widget) {
			// Dynamically load script and then open
			await new Promise<void>((resolve) => {
				const existing = document.querySelector('script[src="https://booking.eswk.co.uk/widget.js"]') as HTMLScriptElement | null
				if (existing) { existing.addEventListener('load', () => resolve()); if ((existing as any).readyState === 'complete') resolve(); return }
				const script = document.createElement('script')
				script.src = 'https://booking.eswk.co.uk/widget.js'
				script.async = true
				script.onload = () => resolve()
				document.body.appendChild(script)
			})
			widget = initWidget()
		}
		if (widget && typeof widget.open === 'function') {
			widget.open()
			return
		}
		// Final fallback
		window.open('https://booking.eswk.co.uk/fineline-clinic', '_blank')
	}

	return (
		<button onClick={handleClick} aria-label={ariaLabel} className={className}>
			{children}
		</button>
	)
}


