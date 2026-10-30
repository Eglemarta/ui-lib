import type { ComponentPropsWithRef, MouseEvent } from 'react'
import styles from './Button.module.css'

export type ButtonProps = ComponentPropsWithRef<'button'> & {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md'
    loading?: boolean
}

export function Button({
    ref,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    type = 'button',
    onClick,
    className,
    ...rest
}: ButtonProps) {
    const isBlocked = disabled || loading

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        if (isBlocked) return
        onClick?.(event)
    }

    const classNames = [styles.button, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ')

    return (
        <button
            ref={ref}
            type={type}
            disabled={disabled}
            aria-busy={loading || undefined}
            aria-disabled={loading || undefined}
            className={classNames}
            onClick={handleClick}
            {...rest}
        />
    )
}
