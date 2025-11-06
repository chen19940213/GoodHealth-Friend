import { View } from "@tarojs/components";
import { Component, ReactNode } from "react";
import './index.scss';

interface IProps {
    hidden?: boolean;
    children?: ReactNode;
    title: string;
}

class FusionComponents extends Component<IProps> {
  render() {
    const { title, hidden } = this.props;
    if (hidden) {
        return null;
    }
    return (
        <View className="fusion-components-view">
            <View className="title">{title}</View>
            {this.props?.children}
        </View>
    )
  }
}


export default FusionComponents;    