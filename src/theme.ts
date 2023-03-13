import startCase from "lodash.startcase";

import getColors, { type Variant } from "./colors";

type Theme = {
  $schema: string;
  name: string;
  type: Variant;
  colors: {
    [key: string]: string;
  };
  tokenColors: {
    name: string;
    scope: string[];
    settings: { foreground?: string; fontStyle?: string };
  }[];
};

const theme = (type: Variant): Theme => {
  const colors = getColors(type);

  return {
    $schema: "vscode://schemas/color-theme",
    name: startCase(`Sprinkles ${type}`),
    type,
    colors: {
      "activityBar.background": colors.canvas.background.default,
      "activityBarBadge.background": colors.canvas.background.default,
      "badge.background": colors.canvas.badge.background,
      "badge.foreground": colors.canvas.badge.foreground,
      "button.background": colors.canvas.button.primary.background,
      "button.foreground": colors.canvas.foreground.default,
      "button.hoverBackground": colors.canvas.button.primary.hover,
      "button.secondaryBackground": colors.canvas.button.primary.background,
      "button.secondaryForeground": colors.canvas.foreground.default,
      "button.secondaryHoverBackground": colors.canvas.button.primary.hover,
      "debugToolBar.background": colors.canvas.background.default,
      "editor.background": colors.editor.background,
      "editor.findMatchHighlightBackground": colors.canvas.foreground.opacity,
      "editor.foreground": colors.editor.foreground,
      "editor.lineHighlightBackground": colors.editor.activeLineBackground,
      "editor.selectionBackground": colors.canvas.foreground.opacity,
      "editor.selectionHighlightBackground": colors.canvas.foreground.opacity,
      "editor.wordHighlightBackground": colors.canvas.invisible,
      "editorBracketMatch.background": colors.canvas.foreground.opacity,
      "editorBracketMatch.border": colors.canvas.foreground.default,
      "editorCursor.foreground": colors.editor.cursor,
      "editorGroup.emptyBackground": colors.canvas.background.default,
      "editorGroupHeader.border": colors.editor.background,
      "editorGroupHeader.tabsBackground": colors.canvas.background.default,
      "editorGroupHeader.tabsBorder": colors.editor.background,
      "editorGutter.addedBackground": colors.editor.gutter.added,
      "editorGutter.deletedBackground": colors.editor.gutter.deleted,
      "editorGutter.foldingControlForeground": colors.editor.lineNumbers,
      "editorGutter.modifiedBackground": colors.editor.gutter.modified,
      "editorLineNumber.activeForeground": colors.canvas.foreground.default,
      "editorLineNumber.foreground": colors.editor.lineNumbers,
      "editorRuler.foreground": colors.editor.ruler,
      "editorWidget.background": colors.canvas.background.default,
      focusBorder: colors.canvas.border.default,
      "gitDecoration.addedResourceForeground": colors.editor.git.added,
      "gitDecoration.conflictingResourceForeground":
        colors.editor.git.conflicting,
      "gitDecoration.deletedResourceForeground": colors.editor.error,
      "gitDecoration.modifiedResourceForeground": colors.editor.warning,
      "gitDecoration.untrackedResourceForeground": colors.editor.git.added,
      "gitDecoration.renamedResourceForeground": colors.editor.git.added,
      "input.background": colors.canvas.input.background,
      "input.border": colors.canvas.border.inset,
      "inputOption.activeBackground": colors.canvas.inputOption.default,
      "inputOption.activeBorder": colors.canvas.inputOption.default,
      "list.activeSelectionBackground": colors.canvas.border.inset,
      "list.activeSelectionForeground": colors.editor.foreground,
      "list.errorForeground": colors.editor.error,
      "list.focusBackground": colors.canvas.background.defaultHover,
      "list.highlightForeground": colors.canvas.foreground.highlight,
      "list.hoverBackground": colors.canvas.background.defaultHover,
      "list.inactiveSelectionBackground": colors.canvas.border.inset,
      "list.warningForeground": colors.editor.warning,
      "notificationCenter.border": colors.canvas.border.overlay,
      "notificationCenterHeader.background": colors.canvas.background.default,
      "notificationToast.border": colors.canvas.border.overlay,
      "notifications.background": colors.canvas.background.default,
      "notifications.border": colors.canvas.border.overlay,
      "notificationsErrorIcon.foreground": colors.canvas.notifications.error,
      "notificationsInfoIcon.foreground": colors.canvas.notifications.info,
      "notificationsWarningIcon.foreground":
        colors.canvas.notifications.warning,
      "panel.background": colors.canvas.background.default,
      "panel.border": colors.canvas.invisible,
      "panelTitle.activeBorder": colors.canvas.foreground.default,
      "panelTitle.activeForeground": colors.editor.foreground,
      "panelTitle.inactiveForeground": colors.canvas.foreground.muted,
      "scrollbar.shadow": colors.canvas.invisible,
      "sideBar.background": colors.canvas.background.default,
      "sideBar.foreground": colors.canvas.foreground.default,
      "statusBar.background": colors.canvas.background.default,
      "statusBar.debuggingBackground": colors.canvas.background.default,
      "statusBar.focusBorder": colors.canvas.invisible,
      "statusBar.foreground": colors.canvas.foreground.default,
      "statusBar.noFolderBackground": colors.canvas.background.default,
      "tab.activeBackground": colors.editor.background,
      "tab.border": colors.canvas.border.overlay,
      "tab.inactiveBackground": colors.canvas.background.default,
      "terminal.ansiBlack": colors.terminal.black,
      "terminal.ansiBlue": colors.terminal.blue,
      "terminal.ansiBrightBlack": colors.terminal.black,
      "terminal.ansiBrightBlue": colors.terminal.blue,
      "terminal.ansiBrightCyan": colors.terminal.cyan,
      "terminal.ansiBrightGreen": colors.terminal.green,
      "terminal.ansiBrightMagenta": colors.terminal.magenta,
      "terminal.ansiBrightRed": colors.terminal.red,
      "terminal.ansiBrightWhite": colors.terminal.white,
      "terminal.ansiBrightYellow": colors.terminal.yellow,
      "terminal.ansiCyan": colors.terminal.cyan,
      "terminal.ansiGreen": colors.terminal.green,
      "terminal.ansiMagenta": colors.terminal.magenta,
      "terminal.ansiRed": colors.terminal.red,
      "terminal.ansiWhite": colors.terminal.white,
      "terminal.ansiYellow": colors.terminal.yellow,
      "terminal.background": colors.terminal.background,
      "terminal.foreground": colors.terminal.foreground,
      "titleBar.activeBackground": colors.canvas.background.overlay,
      "titleBar.activeForeground": colors.canvas.foreground.default,
      "titleBar.inactiveBackground": colors.canvas.background.overlay,
      "titleBar.inactiveForeground": colors.canvas.foreground.opacity,
      "widget.shadow": colors.canvas.invisible,
    },
    tokenColors: [
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          fontStyle: "italic",
          foreground: colors.editor.tokens.darkGray,
        },
      },
      {
        name: "Variables",
        scope: [
          "variable",
          "string constant.other.placeholder",
          "meta.jsx.children",
          "constant.other.color",
        ],
        settings: {
          foreground: colors.editor.tokens.default,
        },
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "Keyword, Storage",
        scope: [
          "storage.type",
          "storage.modifier",
          "variable.other.object.tsx",
        ],
        settings: {
          foreground: colors.editor.tokens.blue,
        },
      },
      {
        name: "Keyword, Storage, Type JS",
        scope: ["storage.type.type.js"],
        settings: {
          foreground: colors.editor.tokens.pink,
        },
      },
      {
        name: "Punctuation",
        scope: [
          "punctuation",
          "meta.type.annotation keyword.operator.type",
          "meta.block punctuation.definition.tag",
          "meta.tag punctuation.definition.tag",
        ],
        settings: {
          foreground: colors.editor.tokens.gray,
        },
      },
      {
        name: "Punctuation definition",
        scope: [
          "punctuation.definition.tag",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.definition.string",
          "punctuation.definition.typeparameters",
          "keyword.operator.optional.js",
          "keyword.operator.type.annotation.js",
          "keyword.operator.assignment.js",
          "keyword.operator.assignment.tsx",
          "keyword.operator.optional.tsx",
          "punctuation.definition.parameters",
          "meta.brace.round",
          "punctuation.accessor",
          "punctuation.section.embedded",
          "punctuation.separator",
          "punctuation.definition.template-expression",
          "meta.brace.square",
          "punctuation.definition.binding-pattern.array.js",
        ],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "Classes",
        scope: [
          "entity.other.inherited-class",
          "entity.name.type.class",
          "entity.name.type.module",
          "entity.name.function",
          "meta.function-call entity.name.function",
        ],
        settings: {
          foreground: colors.editor.tokens.amber,
        },
      },
      {
        name: "Operator, Misc",
        scope: [
          "keyword.control",
          "constant.other.color",
          "meta.tag",
          "keyword.other.template",
          "keyword.other.substitution",
          "keyword.operator",
        ],
        settings: {
          foreground: colors.editor.tokens.pink,
        },
      },
      {
        name: "Keywords",
        scope: ["keyword.operator.expression.typeof", "keyword.operator.new"],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "Tag",
        scope: [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter",
          "source.yaml constant.language",
        ],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "Function, Special Method",
        scope: [
          "meta.class entity.name.function",
          "meta.type.declaration entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method",
          "variable.other.object.js",
        ],
        settings: {
          foreground: colors.editor.tokens.blue,
        },
      },
      {
        name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
        scope: [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
          "keyword.other.unit",
          "keyword.other",
        ],
        settings: {
          foreground: colors.editor.tokens.pink,
        },
      },
      {
        name: "Function parameters",
        scope: [
          "variable.parameter",
          "meta.parameters variable.object.property",
        ],
        settings: {
          foreground: colors.editor.tokens.red,
          fontStyle: "italic",
        },
      },
      {
        name: "String, Symbols, Inherited Class, Markup Heading",
        scope: [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
          "meta.object-literal.key",
        ],
        settings: {
          foreground: colors.editor.tokens.green,
        },
      },
      {
        name: "Class, Support",
        scope: [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types",
          "storage.type.function.arrow",
        ],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "Sub-methods",
        scope: [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js",
        ],
        settings: {
          foreground: colors.editor.tokens.softRed,
        },
      },
      {
        name: "Language methods",
        scope: ["variable.language"],
        settings: {
          fontStyle: "italic",
          foreground: colors.editor.tokens.softRed,
        },
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: colors.editor.tokens.amber,
          fontStyle: "italic",
        },
      },
      {
        name: "HTML Attributes",
        scope: [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name",
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.editor.tokens.amber,
        },
      },
      {
        name: "CSS Class and Support",
        scope: [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "meta.property-name.css",
          "source.postcss support.type.property-name",
        ],
        settings: {
          foreground: colors.editor.tokens.amber,
        },
      },
      {
        name: "CSS Media Punctuation",
        scope: ["source.css punctuation.definition.keyword"],
        settings: {
          foreground: colors.editor.tokens.pink,
        },
      },
      {
        name: "CSS Units",
        scope: [
          "source.css keyword.other.unit",
          "support.constant.property-value",
          "support.constant.vendored",
          "source.css keyword.operator",
        ],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "CSS Classes",
        scope: ["source.css entity.other.attribute-name.pseudo-class"],
        settings: {
          foreground: colors.editor.tokens.teal,
          fontStyle: "",
        },
      },
      {
        name: "CSS Classes",
        scope: ["source.css entity.other.attribute-name.class"],
        settings: {
          foreground: colors.editor.tokens.blue,
          fontStyle: "",
        },
      },
      {
        name: "CSS Variables",
        scope: ["source.css variable"],
        settings: {
          foreground: colors.editor.tokens.blue,
        },
      },
      {
        name: "CSS Constants",
        scope: ["source.css constant.numeric", "source.css support.constant"],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "Inserted",
        scope: ["markup.inserted"],
        settings: {
          foreground: colors.editor.tokens.softGreen,
        },
      },
      {
        name: "Deleted",
        scope: ["markup.deleted"],
        settings: {
          foreground: colors.editor.tokens.softRed,
        },
      },
      {
        name: "Changed",
        scope: ["markup.changed"],
        settings: {
          foreground: colors.editor.tokens.softViolet,
        },
      },
      {
        name: "Regular Expressions",
        scope: ["string.regexp"],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "Escape Characters",
        scope: ["constant.character.escape"],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "URL",
        scope: ["*url*", "*link*", "*uri*"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        name: "Decorators",
        scope: [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.editor.tokens.blue,
        },
      },
      {
        name: "ES7 Bind Operator",
        scope: [
          "source.js constant.other.object.key.js string.unquoted.label.js",
        ],
        settings: {
          fontStyle: "italic",
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "JSON Key",
        scope: [
          "source.json meta.structure.dictionary.json support.type.property-name.json",
        ],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "JSON Punctuation",
        scope: ["source.json punctuation.support.type.property-name"],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "JSON Punctuation",
        scope: ["source.json punctuation.separator"],
        settings: {
          foreground: colors.editor.tokens.gray,
        },
      },
      {
        name: "JSON Constant",
        scope: [
          "source.json constant.language",
          "source.json constant.numeric",
        ],
        settings: {
          foreground: colors.editor.tokens.amber,
        },
      },
      {
        name: "Markdown - Plain",
        scope: [
          "text.html.markdown",
          "punctuation.definition.list_item.markdown",
        ],
        settings: {
          foreground: colors.editor.tokens.default,
        },
      },
      {
        name: "Markdown - Heading",
        scope: [
          "entity.name.section.markdown",
          "markup.inline.raw.string.markdown",
        ],
        settings: {
          foreground: colors.editor.tokens.green,
        },
      },
      {
        name: "Markdown - Heading Punctuation",
        scope: ["punctuation.definition.heading.markdown"],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "Markdown - Modifiers Punctuation",
        scope: [
          "punctuation.definition.italic.markdown",
          "punctuation.definition.bold.markdown",
          "punctuation.definition.raw.markdown",
          "punctuation.definition.metadata.markdown",
          "punctuation.definition.link.title.begin.markdown",
          "punctuation.definition.link.title.end.markdown",
        ],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "Markup - Italic",
        scope: ["markup.italic"],
        settings: {
          fontStyle: "italic",
          foreground: colors.editor.tokens.pink,
        },
      },
      {
        name: "Markup - Bold",
        scope: ["markup.bold", "markup.bold string"],
        settings: {
          fontStyle: "bold",
          foreground: colors.editor.tokens.blue,
        },
      },
      {
        name: "Markup - Underline",
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "Markup - Quote",
        scope: ["markup.quote"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "Markdown - Link",
        scope: ["string.other.link.title.markdown"],
        settings: {
          foreground: colors.editor.tokens.amber,
        },
      },
      {
        name: "Markdown - Link Anchor",
        scope: ["constant.other.reference.link.markdown"],
        settings: {
          foreground: colors.editor.tokens.amber,
        },
      },
      {
        name: "GraphQL - Type",
        scope: ["keyword.type.graphql"],
        settings: {
          foreground: colors.editor.tokens.amber,
        },
      },
      {
        name: "GraphQL - Variables",
        scope: ["variable.graphql"],
        settings: {
          foreground: colors.editor.tokens.green,
        },
      },
      {
        name: "GraphQL - Punctuation",
        scope: ["keyword.operator.nulltype.graphql"],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "GraphQL - Keywords",
        scope: [
          "keyword.enum.graphql",
          "keyword.operation.graphql",
          "keyword.fragment.graphql",
        ],
        settings: {
          foreground: colors.editor.tokens.pink,
        },
      },
      {
        name: "GraphQL - Enum value",
        scope: ["constant.character.enum.graphql"],
        settings: {
          foreground: colors.editor.tokens.default,
        },
      },
      {
        name: "GraphQL - Query name",
        scope: ["entity.name.function.graphql"],
        settings: {
          foreground: colors.editor.tokens.blue,
        },
      },
      {
        name: "Shell - Punctuation",
        scope: [
          "punctuation.definition.variable.shell",
          "punctuation.section.array.shell",
          "punctuation.definition.logical-expression.shell",
        ],
        settings: {
          foreground: colors.editor.tokens.cyan,
        },
      },
      {
        name: "Shell - Function",
        scope: ["variable.other.special.shell"],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
      {
        name: "Shell - Function",
        scope: ["string.interpolated.dollar.shell"],
        settings: {
          foreground: colors.editor.tokens.default,
        },
      },
      {
        name: "Shell - Loop ",
        scope: ["meta.scope.for-in-loop.shell"],
        settings: {
          foreground: colors.editor.tokens.red,
        },
      },
    ],
  };
};

export default theme;
