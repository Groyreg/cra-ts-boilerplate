### Applied Technology Stack

```
- React
- Redux
- Redux Saga
- Redux Form
- Scss
- TypeScript
- ES Lint
- Prettier
- Mock Server for write & testing API
```

### Project structure

```
root/
├── config/
├── node_modules/
├── mock-server/
├── src/
|    ├── assets
|    |     ├── fonts
|    |     ├── images
|    |     └── libs
|    ├── components
|    |     ├── Example
|    |     |     ├── Example.tsx
|    |     |     ├── ExampleContainer.tsx
|    |     └──   └── Example.scss
|    ├── constants
|    |     ├── example.ts
|    |     └── constants.ts
|    |
|    ├── models
|    |     └── Example.ts
|    |
|    ├── scenses
|    |     ├── Example
|    |     |     ├── components
|    |     |     |        └── such as Example
|    |     |     ├── services
|    |     |     |        └── example.ts
|    |     |     ├── Example.tsx
|    |     |     ├── ExampleContainer.tsx
|    |     └──   └── Example.scss
|    ├── services
|    |     ├── api
|    |     |    └── Example.ts
|    |     ├── config
|    |     |    ├── dev-config.ts
|    |     |    └── index.ts
|    |     ├── helpers
|    |     |    └── example.ts
|    |     ├── mormalizers
|    |     |    └── example.ts
|    |     ├── validators
|    |     |    └── example.ts
|    ├── store
|    |     ├── example
|    |     |     ├── exampleActions.ts
|    |     |     ├── exampleReducer.ts
|    |     |     ├── exampleSaga.ts
|    |     |     └── exampleSelectors?.ts
|    |     ├── index.ts
|    |     ├── rootActions.ts
|    |     ├── rootReducer.ts
|    |     └── rootSagas.ts
|    ├── styles
|    |     ├── common
|    |     |     ├── breakpoints.scss
|    |     |     ├── colors.scss
|    |     |     ├── fonts.scss
|    |     |     ├── variables.scss
|    |     |     └── index.scss
|    |     ├── example.scss
|    |     └── index.scss
|    └──   react-app-env.d.ts
└── index.tsx
```

### Available aliases

```
- @app          => root/src
- @assets       => root/src/assets
- @fonts        => root/src/assets/fonts
- @components   => root/src/components
- @constants    => root/src/constants
- @images       => root/src/assets/images
- @libs         => root/src/assets/libs
- @models         => root/src/assets/models
- @scenes       => root/src/scenes
- @store        => root/src/store
- @styles       => root/src/styles
```

### Branch naming rules

```
- feature/ci/tfs-tfsNumber      => new development task
- bugfix/ci/tfs-tfsNumber       => bug fix task in component
- hotfix/ci/tfs-tfsNumber       => hotfix task in component
- release/releaseNumber         => branch for deploy
```

### Style guides

[Documentation](https://ru.bem.info/methodology/quick-start/)

The project uses the BEM methodology. It is expanded by the following rules:

- writing modifiers without the main block prefix;

**Example in Html**:

Before:

```
<div class="example">
    <p class="example__item example__item_black">
        Lorem
    </p>
</div>
```

After:

```
<div class="example">
    <p class="example__item _black">
        Lorem
    </p>
</div>
```

**Example in SCSS**:

Before:

```
.example {
   &__item {
       &_black {
           // some rules
       }
   }
}
```

After:

```
.example {
    &__item {
        &._black {
            // some rules
        }
    }
}
```

##### Available breakpoints

```
$bp-xs: 320;
$bp-sm: 480;
$bp-md: 768;
$bp-lg: 1024;
$bp-xl: 1367;
```

##### Media Queries example

```
@media #{$sm} {}
@media #{$md} {}
@media #{$lg} {}
@media #{$xl} {}

@media #{$only-xs} {}
@media #{$only-sm} {}
@media #{$only-md} {}
@media #{$only-lg} {}
@media #{$only-xl} {}

@media #{$up-to-sm} {}
@media #{$up-to-md} {}
@media #{$up-to-lg} {}
@media #{$up-to-xl} {}
```
