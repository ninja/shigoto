# Shigoto - Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [1.0.3] - 2015-12-14
### Changed
- Lowers minimum version of Node to 4 (was 5).
- Updates development dependency versions.

## [1.0.2] - 2015-11-22
### Added
- Adds ability for bin.js to work in a context one level higher.

## [1.0.1] - 2015-11-22
### Added
- Changelog.

## Changed
- Removes checking grandparent for package. Must now copy bin.js.
- Updates to latest known stable dependencies.

## Fixed
- Updates readme to use build instead of bin to node_modules hack.

## [1.0.0] - 2015-11-13
### Added
- Traverses from grandparent context down to binary to find package.
- Passes command and arguments to npm script with found context.
- Tests.

[Unreleased]: https://github.com/ninja/shigoto/compare/1.0.3...develop
[1.0.3]: https://github.com/ninja/shigoto/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/ninja/shigoto/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/ninja/shigoto/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/ninja/shigoto/compare/1.0.0
