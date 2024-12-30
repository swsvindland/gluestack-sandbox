import { useState } from 'react';
import { VStack } from '@/src/components/ui/vstack';
import { Card } from '@/src/components/ui/card';
import { Input, InputField } from '@/src/components/ui/input';
import { Button, ButtonText } from '@/src/components/ui/button';
import { KeyboardAvoidingView } from 'react-native';
import { useRouter } from 'expo-router';
import {
    FormControl,
    FormControlLabel,
    FormControlLabelText,
} from '@/src/components/ui/form-control';

export default function HomeScreen() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login');
    };

    return (
        <VStack className="flex h-[90vh] items-center justify-center p-4">
            <KeyboardAvoidingView className="flex w-full items-center justify-center">
                <Card className="w-full max-w-md">
                    <VStack className="gap-4">
                        <FormControl>
                            <FormControlLabel>
                                <FormControlLabelText>
                                    Email
                                </FormControlLabelText>
                            </FormControlLabel>
                            <Input
                                variant="outline"
                                size="lg"
                                isDisabled={false}
                                isInvalid={false}
                                isReadOnly={false}
                            >
                                <InputField
                                    placeholder=""
                                    value={username}
                                    onChangeText={setUsername}
                                />
                            </Input>
                            <FormControlLabel>
                                <FormControlLabelText>
                                    Password
                                </FormControlLabelText>
                            </FormControlLabel>
                            <Input
                                variant="outline"
                                size="lg"
                                isDisabled={false}
                                isInvalid={false}
                                isReadOnly={false}
                            >
                                <InputField
                                    placeholder=""
                                    type="password"
                                    value={password}
                                    onChangeText={setPassword}
                                />
                            </Input>
                            <VStack className="gap-4 py-4">
                                <Button
                                    size="lg"
                                    variant="solid"
                                    action="primary"
                                    onPress={handleLogin}
                                >
                                    <ButtonText>Login</ButtonText>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    action="secondary"
                                >
                                    <ButtonText>Register</ButtonText>
                                </Button>
                            </VStack>
                        </FormControl>
                    </VStack>
                </Card>
            </KeyboardAvoidingView>
        </VStack>
    );
}