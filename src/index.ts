import { jsx as emotion } from '@emotion/core';
import css, {
  ResponsiveStyleValue,
  SystemStyleObject,
} from '@styled-system/css';

function makePragma<T>(theme: T) {
  return (type: any, props: any, ...children: any[]) =>
    emotion.apply(undefined, [
      type,
      { ...props, css: css(props.sx)(theme) },
      ...children,
    ]);
}

export { makePragma };

/**
 * The `SxStyleProp` extension `SystemStyleObject` and `Emotion` [style props](https://emotion.sh/docs/object-styles)
 * such that properties that are part of the `Theme` will be transformed to
 * their corresponding values. Other valid CSS properties are also allowed.
 */
type SxStyleProp = SystemStyleObject &
  Record<
    string,
    | SystemStyleObject
    | ResponsiveStyleValue<number | string>
    | Record<string, SystemStyleObject | ResponsiveStyleValue<number | string>>
  >;

interface SxProps {
  /**
   * The sx prop lets you style elements inline, using values from your
   * theme. To use the sx prop, add the custom pragma as a comment to the
   * top of your module and import the jsx function.
   *
   * ```ts
   * // @jsx jsx
   *
   * import { jsx } from 'theme-ui'
   * ```
   */
  sx?: SxStyleProp;
}

declare module 'react' {
  // tslint:disable-next-line: no-empty-interface
  interface DOMAttributes<T> extends SxProps {}
}

declare global {
  namespace JSX {
    // tslint:disable-next-line: no-empty-interface
    interface IntrinsicAttributes extends SxProps {}
  }
}
