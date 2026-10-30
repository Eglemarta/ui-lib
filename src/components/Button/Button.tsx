import type { ComponentPropsWithRef } from "react";

export type ButtonProps = ComponentPropsWithRef<'button'> & {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md'
    loading?: boolean
}

export function Button(_props: ButtonProps) {
    return null
}