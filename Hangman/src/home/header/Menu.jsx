import React from 'react'
import { Theme, Button, DropdownMenu, Grid } from "@radix-ui/themes";
const Menu = () => {
  return (
    <>
      <Theme>
      <Grid columns="2" gap="3" display="inline-grid">
      <DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Button color="gray" variant="soft" highContrast style={{ color: 'white' }}>
				Options
				<DropdownMenu.TriggerIcon />
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content color="gray" variant="soft" highContrast>
			<DropdownMenu.Item shortcut="⌘ A">Animals</DropdownMenu.Item>
			<DropdownMenu.Item shortcut="⌘ F">Fruit</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item shortcut="⌘ N">Logout</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
      </Grid>
      </Theme>
    </>
  )
}

export default Menu
