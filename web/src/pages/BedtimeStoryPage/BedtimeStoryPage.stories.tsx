import type { Meta, StoryObj } from '@storybook/react'

import BedtimeStoryPage from './BedtimeStoryPage'

const meta: Meta<typeof BedtimeStoryPage> = {
  component: BedtimeStoryPage,
}

export default meta

type Story = StoryObj<typeof BedtimeStoryPage>

export const Primary: Story = {}
