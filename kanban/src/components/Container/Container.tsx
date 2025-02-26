import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { Handle, Remove } from '../Item';

import styles from './Container.module.css';

export interface Props {
    children: React.ReactNode;
    columns?: number;
    childrenCount?: string;
    label?: string;
    style?: React.CSSProperties;
    horizontal?: boolean;
    hover?: boolean;
    handleProps?: React.HTMLAttributes<any>;
    scrollable?: boolean;
    shadow?: boolean;
    placeholder?: boolean;
    unstyled?: boolean;
    onClick?(): void;
    onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
    (
        {
            children,
            columns = 1,
            handleProps,
            horizontal,
            hover,
            onClick,
            onRemove,
            label,
            childrenCount,
            placeholder,
            style,
            scrollable,
            shadow,
            unstyled,
            ...props
        }: Props,
        ref
    ) => {
        const Component = onClick ? 'button' : 'div';

        return (
            <Component
                {...props}
                ref={ref as React.Ref<any>} // Cast ref to a more generic type
                style={{
                    ...style,
                    '--columns': columns,
                } as React.CSSProperties}
                className={classNames(
                    styles.Container,
                    unstyled && styles.unstyled,
                    horizontal && styles.horizontal,
                    hover && styles.hover,
                    placeholder && styles.placeholder,
                    scrollable && styles.scrollable,
                    shadow && styles.shadow
                )}
                onClick={onClick}
                tabIndex={onClick ? 0 : undefined}
            >
                {label ? (
                    <div className={styles.Header}>
                        {label}
                        {childrenCount && (
                            <span className={styles.ChildrenCount}>({childrenCount})</span>
                        )}
                        <div className={styles.Actions}>
                        {onRemove ? <Remove onClick={onRemove} /> : undefined}
                            <Handle {...handleProps} />
                        </div>
                    </div>
                ) : null}
                {placeholder ? children : <ul>{children}</ul>}
            </Component>
        );
    }
);
