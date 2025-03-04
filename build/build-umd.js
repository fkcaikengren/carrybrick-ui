import {build } from 'vite'
import buildConfig from './vite.umd.config'

export const buildUMD = async () => build(buildConfig)