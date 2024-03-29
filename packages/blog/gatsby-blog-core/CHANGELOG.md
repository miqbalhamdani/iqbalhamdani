# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.2.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.1.0...@elegantstack/gatsby-blog-core@3.2.0) (2021-03-27)


### Features

* **gatsby-blog-core:** re-enable Sanity CMS with support for new sourcing plugin ([ff30a85](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ff30a85e6a26d005580928f9e9824b61c7fc557c))
* upgrade dependencies ([da85e59](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/da85e59915b171796803e5e281fae0cd2e263e3c))




## [3.1.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.0.1...@elegantstack/gatsby-blog-core@3.1.0) (2021-03-20)


### Features

* upgrade to Gatsby v3.1 and upgrade other deps ([f187898](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f187898cd7cae9827c2290fc5906574de894b75f))




## [3.0.1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.0.0...@elegantstack/gatsby-blog-core@3.0.1) (2021-03-18)

### Bug Fixes

- **gatsby-blog-core:** fix hero image for featured posts not rendering ([2637865](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2637865f3c993e15488db207a9b7f07af1119fa9))

## 3.0.0 (2021-03-17)

### Features

- **gatsby-blog-core:** add sitePaths.article to theme options ([7ba9921](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/7ba992145455b2ae90b86ba6fb067a7e83dafbd6))
- upgrade to Gatsby v3 and gatsby-plugin-image ([2e9689c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2e9689cc5fccf1af4f84ca051809eafccce08d11))
- **gatsby-blog-core:** add missing context.location.state from Gatsby v3 ([ee9bd78](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ee9bd781d2d164a0f4f3166f643f728a3d854202))
- **gatsby-blog-core:** register new gatsby-plugin-image in gatsby-config ([3d1e0ea](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/3d1e0ea3961edd4fc0850b0716553cefb4070d2a))

### Performance Improvements

- **gatsby-blog-core:** decrease default image quality from 85 to 75 ([e1ec503](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/e1ec5032e6d83662104f26116bfb0516c58d7f3b))
- **gatsby-blog-core:** improve responsive image generation [skip ci] ([a87bb6b](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a87bb6bbdb77d2ef7e0556f0a8a1c0f2736c11ca))

### Refactor

- **gatsby-blog-core:** rename @elegantstack/core-blog package to @elegantstack/gatsby-blog-core ([a9a77a4](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a9a77a4d6fb375ccf8ab063015e164ee08e10d01))
- **gatsby-blog-helpers:** rename @elegantstack/helpers-blog package to @elegantstack/gatsby-blog-helpers ([7592f8e](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/7592f8e82ffb8148473878d2ab9edb19c6d3f5fa))
- **helpers:** rename @elegantstack/helpers package to @elegantstack/common-helpers ([a39fe74](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a39fe74e2c08af5091ac4a5b5cff414f23d5b71f))

## 2.11.0 (2021-02-25)

### Features

- **core-blog:** add draft field to mdx articles ([9cf3d71](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9cf3d714f029b43cccd100abcbf2ad409497068a))

### Refactor

- **core-blog:** move gatsby-plugin-proxy-directive dependecny from gatsby-plugin-proxy-schema to core-blog ([9b2b30e](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9b2b30ea38cdf947df09a5511c20c92b334ad0c8))

## 2.10.0 (2021-02-13)

### Features

- upgrade dependencies ([46d41a3](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/46d41a339cd9774a913fa3d70f633661e884a3e8))

### Performance Improvements

- **core-blog:** add webp and quality to author fragment ([a6ee815](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a6ee815498c78d7e88492022196ee72784fff605))

### Refactor

- **core-blog:** remove unnecessary code from ArticleTag node creator ([309ccac](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/309ccac8a0891e89b86a2c564ca4966df94571ec))
- **siteMetadata:** change fragment name ([6395527](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6395527e7f423183af162b5065a00ba9e853b8a6))

## 2.9.0 (2020-12-31)

### Features

- **core-blog:** add Strapi CMS support ([2761a9f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2761a9f331cfc719530ed3e051ba80cbeee2d1e5))

## 2.8.0 (2020-12-15)

### Refactor

- upgrade external dependency packages ([dcf1114](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/dcf1114436cb0f09f029dd4aed6d8a18715ef5a2))

## 2.7.0 (2020-12-05)

### Features

- add ability to enable/disable dark mode from theme options ([366ad91](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/366ad911e950c05edc37cba88ab59f5073690c2f))
- increase Contentful default image quality ([f928840](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f928840d890902de7a9c10e8f4a29da5129cdc4d))

## 2.4.0 (2020-09-26)

### Features

- Remove helpers-blog dependency from flow-ui-layout and pass mobile menu to header via context ([476a37c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/476a37c6aeaf9b7d3b873d13d0b598fb8eff0bc2))

### Bug Fixes

- Remove unnecessary slufigy module form core-blog package ([97110b5](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/97110b590aee44d0432f880a32c4ea198471a738))

## 2.3.1 (2020-08-20)

## 2.3.0 (2020-08-06)

### Features

- add siteUrl to theme options for Open Graph images ([6b3354f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6b3354fda976ad72c4e6384832be3f8e220b753d))

### Bug Fixes

- change sources.mdx to sources.local in default options ([db4db98](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/db4db9870557e93409d4104bf1411f70387f877b))
- separate content/assets from themeOptions.localPaths ([6d5d8b1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6d5d8b152c7f188a84d914f2ec8eeaa38deef72f))

## 2.2.0 (2020-07-28)

### Bug Fixes

- fix sorting of posts by date ([ccc21e9](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ccc21e956a67c3901cbef26d802e9846db5ccb39))

## 2.0.0 (2020-07-26)

### Features

- decouple general functionalities from core and move them to plugins ([eaffbbf](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/eaffbbfe74e4f4a4064c67368e09886c73b6e8a7))
- upgrade dependencies in package files ([9391fad](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9391fad0a525f7a8514ab722831eff9a2eae8e04))

### Bug Fixes

- Author description in Contentful was not resolving correctly ([9c8f30d](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9c8f30db8b1cbade3fa961683a385de8abef0afd))

## [2.10.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.9.0...v2.10.0) (2021-02-13)

### Features

- upgrade dependencies ([46d41a3](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/46d41a339cd9774a913fa3d70f633661e884a3e8))

### Performance Improvements

- **core-blog:** add webp and quality to author fragment ([a6ee815](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a6ee815498c78d7e88492022196ee72784fff605))

### Refactor

- **core-blog:** remove unnecessary code from ArticleTag node creator ([309ccac](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/309ccac8a0891e89b86a2c564ca4966df94571ec))
- **siteMetadata:** change fragment name ([6395527](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6395527e7f423183af162b5065a00ba9e853b8a6))

## [2.9.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.8.0...v2.9.0) (2020-12-31)

### Features

- **core-blog:** add Strapi CMS support ([2761a9f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2761a9f331cfc719530ed3e051ba80cbeee2d1e5))

## [2.8.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.7.0...v2.8.0) (2020-12-15)

### Refactor

- upgrade external dependency packages ([dcf1114](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/dcf1114436cb0f09f029dd4aed6d8a18715ef5a2))

# [2.7.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.6.2...v2.7.0) (2020-12-05)

### Features

- add ability to enable/disable dark mode from theme options ([366ad91](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/366ad911e950c05edc37cba88ab59f5073690c2f))
- increase Contentful default image quality ([f928840](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f928840d890902de7a9c10e8f4a29da5129cdc4d))

# [2.4.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.3.1...v2.4.0) (2020-09-26)

### Bug Fixes

- Remove unnecessary slufigy module form core-blog package ([97110b5](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/97110b590aee44d0432f880a32c4ea198471a738))

### Features

- Remove helpers-blog dependency from flow-ui-layout and pass mobile menu to header via context ([476a37c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/476a37c6aeaf9b7d3b873d13d0b598fb8eff0bc2))

## [2.3.1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.3.0...v2.3.1) (2020-08-20)

**Note:** Version bump only for package @elegantstack/core-blog

# [2.3.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.2.3...v2.3.0) (2020-08-06)

### Bug Fixes

- change sources.mdx to sources.local in default options ([db4db98](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/db4db9870557e93409d4104bf1411f70387f877b))
- separate content/assets from themeOptions.localPaths ([6d5d8b1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6d5d8b152c7f188a84d914f2ec8eeaa38deef72f))

### Features

- add siteUrl to theme options for Open Graph images ([6b3354f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6b3354fda976ad72c4e6384832be3f8e220b753d))

# [2.2.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.1.0...v2.2.0) (2020-07-28)

### Bug Fixes

- fix sorting of posts by date ([ccc21e9](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ccc21e956a67c3901cbef26d802e9846db5ccb39))

# [2.0.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v1.2.0...v2.0.0) (2020-07-26)

### Bug Fixes

- Author description in Contentful was not resolving correctly ([9c8f30d](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9c8f30db8b1cbade3fa961683a385de8abef0afd))

### Features

- decouple general functionalities from core and move them to plugins ([eaffbbf](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/eaffbbfe74e4f4a4064c67368e09886c73b6e8a7))
- upgrade dependencies in package files ([9391fad](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9391fad0a525f7a8514ab722831eff9a2eae8e04))

# [1.2.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v1.1.0...v1.2.0) (2020-07-14)

### Bug Fixes

- Create schema types only when an article of the type is available ([adb3a94](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/adb3a94d34531574ca2fb4ff9cc3ffe2f18d5dac))
- Include path prefixes in user defined slugs ([e31144b](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/e31144b313acc93ac10d0c59a00d51e4e72f26e8))

### Features

- Add support for Sanity CMS (sanity.io) for creating blog posts ([5f9e83f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/5f9e83f7f1d94cb9a896d191868572e17b9b9a9e))
- Port schema types to new sourcing system ([5edc16c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/5edc16ce883bfdc3b3df16006d647527d45c5e07))
- Refactor semantic schema sourcing strategy from cloning/modifying nodes to proxying for cache optimization and more flexibility ([2479f2e](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2479f2e60030fb8087e4c0cd47f1c689cc530d6b))
- Unified GraphQL ArticleCategory.icon from all sources ([59fad09](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/59fad09fd8763080bcaa12afe1ae3a0d9294bea2))

# [1.1.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v1.0.0...v1.1.0) (2020-07-06)

**Note:** Version bump only for package @elegantstack/core-blog
