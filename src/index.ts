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
