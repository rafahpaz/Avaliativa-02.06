import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Bem-vindo",
        }}
      />
      <Drawer.Screen
        name="telaA"
        options={{
          drawerLabel: "Tela A",
          title: "Tela A",
        }}
      />
      <Drawer.Screen
        name="telaB"
        options={{
          drawerLabel: "Tela B",
          title: "Tela B",
        }}
      />
    </Drawer>
  );
}