// Type declarations for Vapi widget custom element
declare namespace JSX {
  interface IntrinsicElements {
    'vapi-widget': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'assistant-id'?: string;
        'public-key'?: string;
      },
      HTMLElement
    >;
  }
}