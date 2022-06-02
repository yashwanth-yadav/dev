package com.cool.behavioral.command;

import java.util.ArrayList;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        WingControls wingControls=new WingControls();
        EngineControls engineControls=new EngineControls();
        List<CommandController> commandControllers=new ArrayList<CommandController>();
        commandControllers.add(wingControls);
        commandControllers.add(engineControls);

        Cockpit cockpit=new Cockpit(commandControllers);

        Pilot pilot=new Pilot(cockpit);
        pilot.fly();
    }
}
