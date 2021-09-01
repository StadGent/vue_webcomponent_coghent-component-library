import { defineComponent, openBlock, createElementBlock, resolveComponent, normalizeClass, createBlock, createCommentVNode, createTextVNode, toDisplayString, ref, watch, withDirectives, createElementVNode, mergeProps, vModelText, createVNode, Fragment, renderList } from 'vue';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/* eslint-disable */
var MetaKey;
(function (MetaKey) {
    MetaKey["Title"] = "title";
    MetaKey["Type"] = "type";
    MetaKey["Collection"] = "collection";
    MetaKey["Description"] = "description";
    MetaKey["Material"] = "material";
})(MetaKey || (MetaKey = {}));
var RelationType;
(function (RelationType) {
    RelationType["AuthoredBy"] = "authoredBy";
    RelationType["IsIn"] = "isIn";
    RelationType["Contains"] = "contains";
})(RelationType || (RelationType = {}));
var MinimalEntityFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "minimalEntity" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Entity" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "name": { "kind": "Name", "value": "metadata" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "key" }, "value": { "kind": "ListValue", "values": [{ "kind": "EnumValue", "value": "title" }, { "kind": "EnumValue", "value": "type" }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "key" } }, { "kind": "Field", "name": { "kind": "Name", "value": "value" } }] } }] } }] };
var FullEntityFragmentDoc = { "kind": "Document", "definitions": [{ "kind": "FragmentDefinition", "name": { "kind": "Name", "value": "fullEntity" }, "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "Entity" } }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }, { "kind": "Field", "alias": { "kind": "Name", "value": "title" }, "name": { "kind": "Name", "value": "metadata" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "key" }, "value": { "kind": "ListValue", "values": [{ "kind": "EnumValue", "value": "title" }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "key" } }, { "kind": "Field", "name": { "kind": "Name", "value": "value" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "metadata" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "key" }, "value": { "kind": "ListValue", "values": [{ "kind": "EnumValue", "value": "description" }, { "kind": "EnumValue", "value": "material" }, { "kind": "EnumValue", "value": "type" }] } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "key" } }, { "kind": "Field", "name": { "kind": "Name", "value": "value" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "mediafiles" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "_id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "original_file_location" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "relations" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "key" } }, { "kind": "Field", "name": { "kind": "Name", "value": "type" } }] } }] } }] };
var GetEntitiesDocument = { "kind": "Document", "definitions": __spreadArrays([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getEntities" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "skip" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "searchQuery" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "Entities" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "skip" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "skip" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "searchQuery" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "searchQuery" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "count" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "results" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "minimalEntity" } }] } }] } }] } }], MinimalEntityFragmentDoc.definitions) };
var GetFullEntitiesDocument = { "kind": "Document", "definitions": __spreadArrays([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getFullEntities" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "skip" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "Int" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "searchQuery" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "fetchPolicy" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "Entities" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "limit" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "limit" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "skip" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "skip" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "searchQuery" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "searchQuery" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "fetchPolicy" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "fetchPolicy" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "count" } }, { "kind": "Field", "name": { "kind": "Name", "value": "limit" } }, { "kind": "Field", "name": { "kind": "Name", "value": "results" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "fullEntity" } }] } }] } }] } }], FullEntityFragmentDoc.definitions) };
var GetEntityByIdDocument = { "kind": "Document", "definitions": __spreadArrays([{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "getEntityById" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "Entity" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "fullEntity" } }] } }] } }], FullEntityFragmentDoc.definitions) };
({ "kind": "Document", "definitions": __spreadArrays([{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "editMetadata" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "String" } } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "metadata" } }, "type": { "kind": "NonNullType", "type": { "kind": "ListType", "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "MetadataInput" } } } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "replaceMetadata" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "metadata" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "metadata" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "FragmentSpread", "name": { "kind": "Name", "value": "fullEntity" } }] } }] } }], FullEntityFragmentDoc.definitions) });

var icons = {
    storybox: "<svg v-if=\"icon == 'verhalenbox'\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\">\n    <path  stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M2.5.5h11M11.5 6.5v2h-7v-2\" />\n    <path  stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M15.5 3.5H.5v11h15v-11z\" />\n  </svg>",
    globe: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" fill=\"none\" viewBox=\"0 0 17 17\">\n    <path  stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 16c2.367 0 4.286-3.358 4.286-7.5 0-4.142-1.919-7.5-4.286-7.5-2.367 0-4.286 3.358-4.286 7.5 0 4.142 1.919 7.5 4.286 7.5zM1 8.5h15M8.5 1v15\"/>\n    <path  stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 16c4.142 0 7.5-3.358 7.5-7.5C16 4.358 12.642 1 8.5 1 4.358 1 1 4.358 1 8.5 1 12.642 4.358 16 8.5 16z\"/>\n</svg>",
    delete: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"17\" fill=\"none\" viewBox=\"0 0 16 17\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2 6v8c0 .53.21 1.04.586 1.414C2.96 15.79 3.47 16 4 16h7c.53 0 1.04-.21 1.414-.586C12.79 15.04 13 14.53 13 14V6M1 4h13M5 4V1h5v3M5 13l5-5M10 13L5 8\"/>\n</svg>",
    edit: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" fill=\"none\" viewBox=\"0 0 17 17\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 7.5l-4-4M6 15l-5 1 1-5L12 1l4 4L6 15z\"/>\n</svg>",
    logout: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\">\n    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M5.5 8.5h10M11.5 4.5l4 4-4 4M8.5 15.5h-7c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7\"/>\n</svg>",
    user: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"18\" fill=\"none\" viewBox=\"0 0 16 18\">\n    <path stroke=\"#F6F5F1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.182 4.333C11.182 2.493 9.757 1 8 1S4.818 2.492 4.818 4.333v1.334C4.818 7.507 6.243 9 8 9s3.182-1.492 3.182-3.333V4.333zM1 17v-2c-.001-.999.193-1.988.57-2.905.378-.917.931-1.744 1.625-2.428M12.807 9.667c.693.685 1.246 1.511 1.623 2.428.377.918.571 1.906.57 2.905v2\"/>\n</svg>",
};
var script$3 = defineComponent({
    props: {
        icon: {
            type: String,
            default: 'storybox',
            required: true,
        },
    },
    setup: function () {
        return { icons: icons };
    },
});

const _hoisted_1$2 = ["innerHTML"];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    innerHTML: _ctx.icons[_ctx.icon]
  }, null, 8 /* PROPS */, _hoisted_1$2))
}

script$3.render = render$3;
script$3.__file = "src/components/BaseIcon.vue";

var buttonstyles = {
    primary: 'text-text-white bg-accent-purple rounded-full shadow-lg px-10',
    secondary: 'text-accent-purple bg-text-white rounded-full shadow-lg px-10',
    'ghost-black': 'text-text-dark',
    'ghost-purple': 'text-accent-purple',
    'ghost-red': 'text-text-red',
};
var script$2 = defineComponent({
    components: { BaseIcon: script$3 },
    props: {
        text: { type: String, required: false },
        onClick: {
            type: Function,
            required: true,
        },
        customStyle: {
            type: String,
            default: 'primary',
        },
        customIcon: {
            type: String,
            default: 'user',
        },
        iconShown: {
            type: Boolean,
            required: true,
        },
    },
    emits: [],
    setup: function (props, _a) {
        _a.emit;
        return {
            buttonstyles: buttonstyles,
        };
    },
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_base_icon = resolveComponent("base-icon");

  return (openBlock(), createElementBlock("span", {
    class: normalizeClass(["flex py-3 max-h-12 font-bold items-center stroke-current cursor-pointer", _ctx.buttonstyles[_ctx.customStyle]]),
    onClick: _cache[0] || (_cache[0] = $event => (_ctx.onClick()))
  }, [
    (_ctx.iconShown)
      ? (openBlock(), createBlock(_component_base_icon, {
          key: 0,
          class: "flex mr-2 stroke-current",
          icon: _ctx.customIcon
        }, null, 8 /* PROPS */, ["icon"]))
      : createCommentVNode("v-if", true),
    createTextVNode(" " + toDisplayString(_ctx.text), 1 /* TEXT */)
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "src/components/BaseButton.vue";

function r(r,e,n){var i,t,o;void 0===e&&(e=50),void 0===n&&(n={});var a=null!=(i=n.isImmediate)&&i,u=null!=(t=n.callback)&&t,c=n.maxWait,v=Date.now(),l=[];function f(){if(void 0!==c){var r=Date.now()-v;if(r+e>=c)return c-r}return e}var d=function(){var e=[].slice.call(arguments),n=this;return new Promise(function(i,t){var c=a&&void 0===o;if(void 0!==o&&clearTimeout(o),o=setTimeout(function(){if(o=void 0,v=Date.now(),!a){var i=r.apply(n,e);u&&u(i),l.forEach(function(r){return (0, r.resolve)(i)}),l=[];}},f()),c){var d=r.apply(n,e);return u&&u(d),i(d)}l.push({resolve:i,reject:t});})};return d.cancel=function(r){void 0!==o&&clearTimeout(o),l.forEach(function(e){return (0, e.reject)(r)}),l=[];},d}

var script$1 = defineComponent({
    name: 'InputField',
    inheritAttrs: false,
    props: {
        label: { type: String },
        modelValue: { type: String, default: '' },
        debounce: { type: Boolean, default: false },
        debounceWait: { type: Number, default: 400 },
    },
    emits: ['update:modelValue', 'onClick'],
    setup: function (props, _a) {
        var emit = _a.emit;
        var inputValue = ref(props.modelValue);
        var emitValue = function (value) { return emit('update:modelValue', value); };
        if (props.debounce) {
            emitValue = r(emitValue, props.debounceWait);
        }
        var onClick = function () {
            console.log('onclick');
            emit('onClick');
        };
        watch(inputValue, emitValue);
        return { inputValue: inputValue, onClick: onClick };
    },
});

const _hoisted_1$1 = { class: "flex block my-2 text-center text-text-dark py-2 shadow-lg pl-2 pr-8 w-full min-w-48 text-neutral-700 text-xl focus:outline-none rounded-full bg-text-white" };
const _hoisted_2$1 = {
  key: 0,
  class: "ml-1 px-4 flex items-center font-bold text-sm rounded-full bg-accent-purple text-text-white"
};
const _hoisted_3 = /*#__PURE__*/createElementVNode("svg", {
  class: "mr-2 stroke-current",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /*#__PURE__*/createElementVNode("path", {
    d: "M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z",
    stroke: "#2D242A",
    "stroke-miterlimit": "12",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /*#__PURE__*/createElementVNode("path", {
    d: "M15.0002 15L11.2422 11.242",
    stroke: "#2D242A",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/createTextVNode(" Zoeken ");
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", _hoisted_1$1, [
    (_ctx.label)
      ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.label), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    withDirectives(createElementVNode("input", mergeProps({
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (_ctx.inputValue = $event))
    }, _ctx.$attrs, {
      type: "text",
      class: "w-full text-center"
    }), null, 16 /* FULL_PROPS */), [
      [vModelText, _ctx.inputValue]
    ]),
    createElementVNode("a", {
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick && _ctx.onClick(...args))),
      class: "flex items-center pt-2 pb-2 cursor-pointer hover:text-accent-purple"
    }, _hoisted_5)
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/BaseInput.vue";

var languages = {
    nl: 'NL',
    en: 'EN',
};
var script = defineComponent({
    name: 'LanguageSelector',
    components: { BaseIcon: script$3 },
    setup: function () {
        return {
            languages: languages,
        };
    },
});

const _hoisted_1 = { class: "flex flex-row items-center" };
const _hoisted_2 = { class: "bg-background-light mr-2 flex" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_base_icon = resolveComponent("base-icon");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_base_icon, {
      class: "flex stroke-current text-text-dark",
      icon: "globe"
    }),
    createElementVNode("select", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.languages, (language) => {
        return (openBlock(), createElementBlock("option", { key: language }, toDisplayString(language), 1 /* TEXT */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

script.render = render;
script.__file = "src/components/LanguageSelector.vue";

export { script$2 as BaseButton, script$3 as BaseIcon, script$1 as BaseInput, GetEntitiesDocument, GetEntityByIdDocument, GetFullEntitiesDocument, script as LanguageSelector };
//# sourceMappingURL=index.esm.js.map
