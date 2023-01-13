import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../components/HomePage";
import QRGenerator from "../components/QRGenerator";
import CreateEdit from "../components/CreateEdit";
import ViewQRScanner from "../components/QRScanner";

const Stack = createNativeStackNavigator();
