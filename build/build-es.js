import {build } from 'vite'
import buildConfig from './vite.es.config'

export const buildES = async () => build(buildConfig)