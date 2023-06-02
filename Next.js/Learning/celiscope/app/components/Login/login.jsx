"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { Input, Spacer } from "@nextui-org/react";
import { UnLockIcon } from "./UnLockIcon";
import { LockIcon } from "./LockIcon";
import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.form}>
      <form>
        <div>
          <h2>Welcome</h2>
        </div>
        <div className={styles.input}>
          <Input
            underlined
            style={{ color: "#767F87" }}
            size="lg"
            color="primary"
            type="text"
            labelPlaceholder="Username"
          />
          <Spacer y={0.5} />
          <Input.Password
            underlined
            style={{ color: "#767F87" }}
            size="lg"
            color="primary"
            type="password"
            labelPlaceholder="Password"
            visibleIcon={<UnLockIcon fill="#767F87" />}
            hiddenIcon={<LockIcon fill="#767F87" />}
          />
          <Spacer y={0.5} />
        </div>
        <div>
          <Button>Login</Button>
          <p>
            Not a member? <Link href="/register">Register</Link>
          </p>
          <p>Or sign up with</p>
        </div>
      </form>
    </div>
  );
}
