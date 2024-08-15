import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.notification}>
        <View style={styles.textContainer}>
        <Image source={require('./assets/check.png')} style={styles.icon} />
          <Text style={styles.title}>Bước 1 Xác định nhu cầu khách hàng</Text>
          <Text style={styles.message}>Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00</Text>
          <Text style={styles.date}>20/08/2020, 06:00</Text>
        </View>
      </View>
      <View style={styles.notification}>
      <Image source={require('./assets/new_customer.png')} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bạn có khách hàng mới!</Text>
          <Text style={styles.message}>Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.</Text>
          <Text style={styles.date}>20/08/2020, 06:00</Text>
        </View>
      </View>
      <View style={styles.notification}>
      <Image source={require('./assets/new_customer.png')} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Khách hàng được chia sẻ bị trùng</Text>
          <Text style={styles.message}>Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.</Text>
          <Text style={styles.date}>20/08/2020, 06:00</Text>
        </View>
      </View>
      <View style={styles.notification}>
      <Image source={require('./assets/new_customer.png')} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Khách hàng được thêm bị trùng</Text>
          <Text style={styles.message}>Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.</Text>
          <Text style={styles.date}>20/08/2020, 06:00</Text>
        </View>
      </View>
      <View style={styles.notification}>
      
        <View style={styles.textContainer}>
        <Image source={require('./assets/check.png')} style={styles.icon} />
          <Text style={styles.title}>Công việc sắp đến hạn trong hôm nay</Text>
          <Text style={styles.message}>Bạn có 17 công việc sắp đến hạn trong hôm nay.</Text>
          <Text style={styles.date}>20/08/2020, 06:00</Text>
        </View>
      </View>
      <View style={styles.notification}>
       
        <View style={styles.textContainer}>
        <Image source={require('./assets/check.png')} style={styles.icon} />
          <Text style={styles.title}>Công việc đã quá hạn</Text>
          <Text style={styles.message}>Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.</Text>
          <Text style={styles.date}>20/08/2020, 06:00</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notification: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  message: {
    color: '#555',
  },
  date: {
    fontSize: 10,
    color: '#999',
  },
});