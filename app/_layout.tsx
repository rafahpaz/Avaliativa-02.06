import { Drawer } from "expo-router/drawer";
import Icon from "@ant-design/icons/lib/components/Icon";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Bem-vindo",
          drawerIcon: ({size}) => (
            <Icon
              name="home"
              size={size}
              color='black'
            />
          ),
        }}
      />
      <Drawer.Screen
        name="cadastro"
        options={{
          drawerLabel: "Cadastro",
          title: "Cadastro",
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="sobre"
        options={{
          drawerLabel: "Sobre",
          title: "Sobre",
          drawerItemStyle: { height: 0 }
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "index",
          title: "index",
          drawerIcon: ({focused, size}) => (
            <Icon
              name="heart"
              size={size}
              color='black'
            />
          ),
        }}
      />
    </Drawer>
  );
}