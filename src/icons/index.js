import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon',SvgIcon)

const context = require.context('./svg',false,/\.svg$/)
console.log(context)
console.log(context.keys)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(context)
