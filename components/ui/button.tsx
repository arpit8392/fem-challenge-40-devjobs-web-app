import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'rounded-md font-bold disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-violet text-white hover:bg-lightViolet',
				secondary:
					'bg-violet/10 text-violet hover:bg-violet/30 dark:bg-white/10 md:dark:text-white hover:dark:bg-white/25',
				icon: 'flex items-center justify-center bg-violet hover:bg-lightViolet',
			},
			size: {
				default: 'px-8 py-4',
				sm: 'px-5 py-4',
				lg: 'px-9 py-4',
				icon: 'h-12 w-12',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
