# Mini-Project

Project from Joakim to learn more about React and how
to send props in the tree.

## Freak Georgi

Becouse I am such an freak some times, i did this in typescript.
and below it's an good explanation from AI that did help me to break it
good.

My biggest problem to understand was when function and types in function was introduce.
Simple way for me to understand, use interface with variables and type in functions

## From Ai

Yes, that's a good way to think about it! Let me break down the common use cases:

Use `interface` when:

```typescript
// For object shapes (like props or data models)
interface Customer {
    id: string;
    name: string;
}

// For component props
interface ButtonProps {
    text: string;
    onClick: () => void;
}
```

Use `type` when:

```typescript
// For function signatures
type DeleteCustomerFn = (id: string) => void;

// For unions
type Size = 'small' | 'medium' | 'large';

// For complex type manipulations
type CustomerKeys = keyof Customer;
```

Looking at your code:

```1:4:apps/edu-mini-project/src/types/contacts/customer.ts
export interface Customer {
 id: string;
 name: string;
}
```

This is a perfect use of `interface` because it defines a data model.

And in your Avatar component:

```3:9:apps/edu-mini-project/src/components/Avatar/index.tsx
type Size = 'small' | 'medium' | 'large'

type AvatarProps = {
  size?: Size
  src?: string
  alt?: string
}
```

This is a good use of `type` because it involves a union type (`Size`) and a simple props structure.

The general rule of thumb is:

- `interface` for object shapes and API contracts
- `type` for function types, unions, and utility types
